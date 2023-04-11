const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const fs = require("fs");
const { expect } = require("chai");
const { describe, it } = require("mocha");
const codingProblems = require("./problems");
// const PythonShell = require("python-shell");
const app = express();
const User = require("./model/userModel");
const Questions = require("./model/questionsModel");
const Submission = require("./model/submissions");
const Port = process.env.PORT || 4001;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const initializeDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB Connection Successful");
    app.listen(Port, () => {
      console.log(`Server Running At ${Port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

initializeDb();

app.post("/signup", async (req, res) => {
  const { fullName, role, email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });
    if (findUser) {
      res.status(400).json({ message: "Email Already Exists" });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({
        fullName,
        role,
        email,
        password: hashedPassword,
      });
      res.status(200).json({ message: "Registration Successful" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email not registered" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Password not matched" });
    }
    const token = await jwt.sign(email, process.env.SECRET);
    res.status(200).json({
      token: token,
      id: user._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/login/admin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if (user.role !== "Admin") {
      return res.status(401).json({ message: "Unauthorized" });
    }
    res.status(200).json({ message: "Hello Admin" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.findById(id);
    res.status(200).json({
      id: data._id,
      role: data.role,
      fullName: data.fullName,
      email: data.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/users", async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndRemove(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/admin/questions", (req, res) => {
  const { title, description, input, output } = req.body;

  // Load existing problems from the problems.js file
  let problems = [];
  try {
    problems = require("./problems");
  } catch (err) {
    console.log("Error loading problems:", err);
  }

  // Convert the input and output to the expected format
  const formattedInput = input.split("\n").map((line) => line.trim());
  const formattedOutput = output.trim();

  // Add the new problem to the array
  problems.push({
    title: title,
    description: description,
    testCases: [
      {
        input: formattedInput,
        expectedOutput: formattedOutput,
      },
    ],
  });

  // Save the updated problems array to the problems.js file
  const fileContent = `module.exports = ${JSON.stringify(problems, null, 2)}`;
  fs.writeFile("./problems.js", fileContent, (err) => {
    if (err) {
      console.log("Error saving problems:", err);
      res.status(500).send("Error saving problems");
    } else {
      console.log("Problem saved:", { title, description, input, output });
      res.status(200).send("Problem saved successfully");
    }
  });
});

app.get("/questions", (req, res) => {
  try {
    const questions = require("./problems");
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/questions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const question = codingProblems.find((problem) => problem.id === id);
    if (!question) {
      return res.status(404).json({ message: "Question not found" });
    }
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/questions/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Questions.findByIdAndRemove(id);
    res.status(200).json({ message: "Question Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/submissions", async (req, res) => {
  const { problemId, userId } = req.query;

  try {
    const submissions = await Submission.find({
      problem: problemId,
      user: userId,
    })
      .populate("problem", "title")
      .exec();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/question/submit", async (req, res) => {
  // Find the coding problem with the given name
  const { problem, code } = req.body;
  const selectedProblem = codingProblems.find((p) => p.problem === problem);

  // Define a function to run the user's code against a single test case
  const runTest = ({ input, expectedOutput }) => {
    try {
      // Use eval to execute the user's code and capture its return value
      const actualOutput = eval(`(${code})(...${JSON.stringify(input)})`);

      // Use Chai to compare the actual and expected output and determine if the test passed
      const pass = expect(actualOutput).to.deep.equal(expectedOutput);
      console.log(`actualOutput: ${actualOutput}`);
      console.log(`expectedOutput: ${expectedOutput}`);

      // Return the test result
      return { input, expectedOutput, actualOutput, pass };
    } catch (error) {
      // Return a failure if an error is thrown
      return {
        input,
        expectedOutput,
        actualOutput: error.message,
        pass: false,
      };
    }
  };

  // Run the user's code against all test cases for the selected problem
  const testResults = selectedProblem.testCases.map(runTest);

  // Send the test results back to the client
  res.send({ testResults });
});

// Define a route to handle requests for a random coding problem
app.get("/random-problem", (req, res) => {
  // Select a random coding problem from the list
  const randomIndex = Math.floor(Math.random() * codingProblems.length);
  const randomProblem = codingProblems[randomIndex];

  // Send the problem back to the client
  res.send(randomProblem);
});
