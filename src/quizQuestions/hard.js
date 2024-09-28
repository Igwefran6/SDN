// Array of harder security and privacy quiz questions
const hardSecurityQuiz = [
  {
    question: "What is a '51% attack' in the context of blockchain technology?",
    options: [
      "An attack where 51% of the nodes go offline simultaneously",
      "An attack where a group controls over 51% of a blockchain's hash rate",
      "An attack where 51% of digital wallets are compromised",
      "An attack where 51% of blockchain transactions are reversed",
    ],
    correct:
      "An attack where a group controls over 51% of a blockchain's hash rate",
  },
  {
    question:
      "Which of the following encryption algorithms is most commonly used in securing blockchain transactions?",
    options: ["AES-256", "SHA-256", "RSA-2048", "MD5"],
    correct: "SHA-256",
  },
  {
    question:
      "How does a 'cold wallet' enhance the security of digital currencies?",
    options: [
      "By speeding up transactions",
      "By storing the private keys offline, reducing the risk of hacking",
      "By generating multiple public addresses",
      "By encrypting transaction data in real-time",
    ],
    correct:
      "By storing the private keys offline, reducing the risk of hacking",
  },
  {
    question: "What is 'dusting' in cryptocurrency security?",
    options: [
      "A method used to increase transaction speed",
      "An attack where small amounts of cryptocurrency are sent to expose user identities",
      "A technique for cleaning corrupted blockchain data",
      "A process to remove fraudulent transactions from the ledger",
    ],
    correct:
      "An attack where small amounts of cryptocurrency are sent to expose user identities",
  },
  {
    question:
      "Which of the following privacy-focused cryptocurrencies uses ring signatures to obscure transaction details?",
    options: ["Bitcoin", "Ethereum", "Monero", "Ripple"],
    correct: "Monero",
  },
  {
    question:
      "How can quantum computing pose a threat to the security of digital currencies?",
    options: [
      "By increasing the number of transaction verifications required",
      "By breaking traditional cryptographic algorithms used in blockchain",
      "By reducing transaction fees drastically",
      "By accelerating block mining exponentially",
    ],
    correct:
      "By breaking traditional cryptographic algorithms used in blockchain",
  },
  {
    question: "What is a 'Sybil attack' in the context of blockchain networks?",
    options: [
      "An attack where multiple nodes are created to outvote other nodes and take control of the network",
      "An attack that disrupts the consensus mechanism through faulty blocks",
      "An attack where blockchain transactions are encrypted using false keys",
      "An attack that targets the miners of the blockchain, reducing their efficiency",
    ],
    correct:
      "An attack where multiple nodes are created to outvote other nodes and take control of the network",
  },
  {
    question:
      "What is the primary goal of 'zero-knowledge proofs' in digital currency transactions?",
    options: [
      "To encrypt transaction amounts for privacy",
      "To prove ownership of information without revealing the information itself",
      "To hide transaction fees from the public ledger",
      "To allow faster transactions with minimal computational power",
    ],
    correct:
      "To prove ownership of information without revealing the information itself",
  },
  {
    question:
      "Which of the following is a potential privacy risk of decentralized finance (DeFi) platforms?",
    options: [
      "The public visibility of all transactions on the blockchain",
      "The use of private keys for user authentication",
      "The integration with multi-signature wallets",
      "The slow verification of transactions",
    ],
    correct: "The public visibility of all transactions on the blockchain",
  },
  {
    question:
      "What is the main vulnerability that smart contracts introduce to blockchain networks?",
    options: [
      "Smart contracts are susceptible to DDoS attacks",
      "Smart contracts cannot be updated once deployed, making them immutable",
      "Smart contracts can contain coding bugs that lead to security breaches",
      "Smart contracts lower the overall performance of the blockchain",
    ],
    correct:
      "Smart contracts can contain coding bugs that lead to security breaches",
  },
];

// Function to randomize and export 10 hard security quiz questions
const getRandomQuizzes = (quizArray, numOfQuestions) => {
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = quizArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizArray[i], quizArray[j]] = [quizArray[j], quizArray[i]];
  }

  // Slice the first 'numOfQuestions' elements from the shuffled array
  return quizArray.slice(0, numOfQuestions);
};

// Export 10 random hard security quizzes
const randomHardSecurityQuizzes = getRandomQuizzes(hardSecurityQuiz, 10);

export default randomHardSecurityQuizzes;
