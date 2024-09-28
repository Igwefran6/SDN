// Array of security and privacy quiz questions
const securityQuiz = [
  {
    question:
      "Which of the following is an essential method to protect your digital wallet?",
    options: [
      "Use a public Wi-Fi network",
      "Disable two-factor authentication",
      "Use a strong, unique password",
      "Share your private keys with others",
    ],
    correct: "Use a strong, unique password",
  },
  {
    question: "What is two-factor authentication (2FA)?",
    options: [
      "A method that requires only a password",
      "A method that requires two forms of identification for access",
      "A security feature that blocks all transactions",
      "A feature that saves passwords automatically",
    ],
    correct: "A method that requires two forms of identification for access",
  },
  {
    question: "How can phishing attacks compromise digital currencies?",
    options: [
      "By sending malicious links to steal personal information",
      "By securing your private keys",
      "By enhancing encryption",
      "By increasing transaction speeds",
    ],
    correct: "By sending malicious links to steal personal information",
  },
  {
    question: "Which of these practices enhances digital currency privacy?",
    options: [
      "Sharing your public key with everyone",
      "Using a virtual private network (VPN) for transactions",
      "Logging in through unsecured websites",
      "Using the same password for multiple accounts",
    ],
    correct: "Using a virtual private network (VPN) for transactions",
  },
  {
    question: "What is the primary function of encryption in digital currency?",
    options: [
      "To speed up transactions",
      "To prevent unauthorized access to data",
      "To share information with the public",
      "To reduce transaction fees",
    ],
    correct: "To prevent unauthorized access to data",
  },
  {
    question:
      "Why should public Wi-Fi be avoided for digital currency transactions?",
    options: [
      "It is slower than private connections",
      "It is less secure and prone to hacking",
      "It is not compatible with digital wallets",
      "It automatically disables encryption",
    ],
    correct: "It is less secure and prone to hacking",
  },
  {
    question:
      "Which of the following is a privacy risk when using digital currencies?",
    options: [
      "Making transactions with small amounts",
      "Storing digital currency in an offline wallet",
      "Reusing the same address for multiple transactions",
      "Using multi-signature wallets",
    ],
    correct: "Reusing the same address for multiple transactions",
  },
  {
    question: "What is a private key in digital currency transactions?",
    options: [
      "A public-facing identifier used to receive funds",
      "A secret number used to sign transactions and manage funds",
      "An account number for tracking transactions",
      "A password used for logging into online accounts",
    ],
    correct: "A secret number used to sign transactions and manage funds",
  },
  {
    question:
      "Which of these is a major security concern for digital currencies?",
    options: [
      "Lack of government control",
      "Vulnerability to hacking and fraud",
      "Excessive transaction fees",
      "Inability to transfer funds internationally",
    ],
    correct: "Vulnerability to hacking and fraud",
  },
  {
    question:
      "What should you do if you suspect your digital currency wallet has been compromised?",
    options: [
      "Ignore the issue",
      "Transfer your funds to a secure wallet immediately",
      "Continue using the same compromised wallet",
      "Publicly share your private key",
    ],
    correct: "Transfer your funds to a secure wallet immediately",
  },
];

// Function to randomize and export 10 security quiz questions
const getRandomQuizzes = (quizArray, numOfQuestions) => {
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = quizArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizArray[i], quizArray[j]] = [quizArray[j], quizArray[i]];
  }

  // Slice the first 'numOfQuestions' elements from the shuffled array
  return quizArray.slice(0, numOfQuestions);
};

// Export 10 random security quizzes
const randomSecurityQuizzes = getRandomQuizzes(securityQuiz, 10);

export default randomSecurityQuizzes;
