module.exports = [
  {
    id: "64340ea1bb33a686f145c895",
    title: "Write a function that reverses a string",
    description:
      "Given a string, return a new string with the characters in reverse order.",
    testCases: [
      {
        input: ["hello"],
        expectedOutput: "olleh",
      },
      {
        input: ["world"],
        expectedOutput: "dlrow",
      },
      {
        input: ["123"],
        expectedOutput: "321",
      },
    ],
  },
  {
    id: "6a8f6d942c26b163a85bcafe",
    title: "Write a function that checks if a given string is a palindrome",
    description:
      "Given a string, return true if it is a palindrome (reads the same backwards as forwards), and false otherwise.",
    testCases: [
      {
        input: ["racecar"],
        expectedOutput: true,
      },
      {
        input: ["hello"],
        expectedOutput: false,
      },
      {
        input: [""],
        expectedOutput: true,
      },
    ],
  },
  {
    id: "98d9bc48c26f1a7e223e8c33",
    title: "Write a function that calculates the factorial of a number",
    description: "Given a non-negative integer n, return n factorial (n!).",
    testCases: [
      {
        input: [5],
        expectedOutput: 120,
      },
      {
        input: [0],
        expectedOutput: 1,
      },
      {
        input: [1],
        expectedOutput: 1,
      },
    ],
  },
  {
    id: "a572f491ed29cc97d1f8d9d9",
    title: "Write a function that checks if a given number is prime",
    description:
      "Given a positive integer n, return true if it is prime (has no factors other than 1 and itself), and false otherwise.",
    testCases: [
      {
        input: [7],
        expectedOutput: true,
      },
      {
        input: [12],
        expectedOutput: false,
      },
      {
        input: [1],
        expectedOutput: false,
      },
    ],
  },
  {
    id: "fef5d3142cb36817c244d2b7",
    title: "Write a function that returns the nth Fibonacci number",
    description:
      "Given a non-negative integer n, return the nth Fibonacci number.",
    testCases: [
      {
        input: [5],
        expectedOutput: 5,
      },
      {
        input: [0],
        expectedOutput: 0,
      },
      {
        input: [1],
        expectedOutput: 1,
      },
    ],
  },
  {
    id: "8a72b46c75eaa5cf5f5c2ac9",
    title:
      "Write a function that checks if a given string contains only unique characters",
    description:
      "Given a string, return true if it contains only unique characters (no repeated characters), and false otherwise.",
    testCases: [
      {
        input: ["hello"],
        expectedOutput: false,
      },
      {
        input: ["world"],
        expectedOutput: true,
      },
      {
        input: [""],
        expectedOutput: true,
      },
    ],
  },
];
