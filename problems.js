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
        expectedOutput: "true",
      },
      {
        input: ["hello"],
        expectedOutput: "false",
      },
      {
        input: ["world"],
        expectedOutput: "false",
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
        expectedOutput: "true",
      },
      {
        input: [12],
        expectedOutput: "false",
      },
      {
        input: [1],
        expectedOutput: "false",
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
  {
    id: "e7c9f9aa290f7c8b0966dc70",
    title: "Count Vowels",
    description:
      "Write a function that counts the number of vowels in a given string.",
    testCases: [
      {
        input: ["hello world"],
        expectedOutput: 3,
      },
      {
        input: ["The quick brown fox jumps over the lazy dog"],
        expectedOutput: 11,
      },
      {
        input: ["12345"],
        expectedOutput: 0,
      },
    ],
  },
  {
    id: "9e9c0ec0d93b52c7e576181f",
    title: "Palindrome Checker",
    description:
      "Write a function that checks whether a given string is a palindrome.",
    testCases: [
      {
        input: ["racecar"],
        expectedOutput: true,
      },
      {
        input: ["A man a plan a canal Panama"],
        expectedOutput: true,
      },
      {
        input: ["hello world"],
        expectedOutput: false,
      },
    ],
  },
  {
    id: "657bbd98a87ab9f232ea2a4a",
    title: "FizzBuzz",
    description:
      "Write a function that prints the numbers from 1 to n. But for multiples of three, print 'Fizz' instead of the number and for the multiples of five, print 'Buzz'. For numbers which are multiples of both three and five, print 'FizzBuzz'.",
    testCases: [
      {
        input: [15],
        expectedOutput:
          "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n",
      },
      {
        input: [5],
        expectedOutput: "1\n2\nFizz\n4\nBuzz\n",
      },
      {
        input: [10],
        expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n",
      },
    ],
  },
  {
    id: "e2c191b05a9d9f536c6a48df",
    title: "Find the Maximum Number in an Array",
    description:
      "Write a function that finds the maximum number in an array of numbers.",
    testCases: [
      {
        input: [[3, 7, 2, 9, 1]],
        expectedOutput: 9,
      },
      {
        input: [[-4, 0, 10, -3]],
        expectedOutput: 10,
      },
      {
        input: [[5]],
        expectedOutput: 5,
      },
    ],
  },
  {
    id: "2e147d731119d5b5e0c03f8b",
    title: "Reverse an Array",
    description: "Write a function that reverses an array of elements.",
    testCases: [
      {
        input: [[1, 2, 3, 4, 5]],
        expectedOutput: [5, 4, 3, 2, 1],
      },
      {
        input: [["hello", "world", "!"]],
        expectedOutput: ["!", "world", "hello"],
      },
      {
        input: [[42]],
        expectedOutput: [42],
      },
    ],
  },
  {
    id: "3a2e3277f4e4b1c4cc88d4f4",
    title: "Factorial",
    description:
      "Write a function that calculates the factorial of a given number.",
    testCases: [
      {
        input: [5],
        expectedOutput: 120,
      },
      {
        input: [10],
        expectedOutput: 3628800,
      },
      {
        input: [1],
        expectedOutput: 1,
      },
    ],
  },
  {
    id: "382bc7f2c2a9a9a3d3f43a97",
    title: "Fibonacci Sequence",
    description:
      "Write a function that generates the Fibonacci sequence up to a given number.",
    testCases: [
      {
        input: [5],
        expectedOutput: [0, 1, 1, 2, 3],
      },
      {
        input: [10],
        expectedOutput: [0, 1, 1, 2, 3, 5, 8],
      },
      {
        input: [1],
        expectedOutput: [0, 1],
      },
    ],
  },
  {
    id: "8a8d4727d648f6825e52a09d",
    title: "Caesar Cipher",
    description:
      "Write a function that encrypts a given string using the Caesar cipher technique.",
    testCases: [
      {
        input: ["Hello, World!", 5],
        expectedOutput: "Mjqqt, Btwqi!",
      },
      {
        input: ["AbCDEfG", 3],
        expectedOutput: "DeFGHiJ",
      },
      {
        input: ["1234", 1],
        expectedOutput: "1234",
      },
    ],
  },
  {
    id: "a2b9be9b1a86819121e3317c",
    title: "Longest Word",
    description:
      "Write a function that finds the longest word in a given string.",
    testCases: [
      {
        input: ["The quick brown fox jumps over the lazy dog"],
        expectedOutput: "jumps",
      },
      {
        input: ["Hello world!"],
        expectedOutput: "world",
      },
      {
        input: ["a bb ccc dddd eeeee"],
        expectedOutput: "eeeee",
      },
    ],
  },
  {
    id: "7d119cb62c8b7f1a4a31b1cc",
    title: "Palindrome Checker",
    description:
      "Write a function that checks if a given string is a palindrome.",
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
        input: ["A man, a plan, a canal: Panama"],
        expectedOutput: true,
      },
    ],
  },
  {
    id: "ef93d1ba44a8a8382c6e6256",
    title: "Sum All Primes",
    description:
      "Write a function that sums all the prime numbers up to a given number.",
    testCases: [
      {
        input: [10],
        expectedOutput: 17,
      },
      {
        input: [20],
        expectedOutput: 77,
      },
      {
        input: [2],
        expectedOutput: 2,
      },
    ],
  },
  {
    id: "8e4b4f4e20063de503a476aa",
    title: "Seek and Destroy",
    description:
      "Write a function that removes all the elements from an array that are the same as the given arguments.",
    testCases: [
      {
        input: [[1, 2, 3, 1, 2, 3], 2, 3],
        expectedOutput: [1, 1],
      },
      {
        input: [["hello", "world", "world", "hello"], "hello"],
        expectedOutput: ["world", "world"],
      },
      {
        input: [[1, 2, 3], 4, 5],
        expectedOutput: [1, 2, 3],
      },
    ],
  },
];
