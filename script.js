// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const timer = document.getElementById("timer");
const ring = document.getElementById("progressRing");

// Questions
const quizQuestions = [
  {
    question: "What is the time complexity of binary search?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question: "Which data structure uses FIFO (First In, First Out)?",
    answers: [
      { text: "Stack", correct: false },
      { text: "Queue", correct: true },
      { text: "Tree", correct: false },
      { text: "Graph", correct: false },
    ],
  },
  {
    question: "Which of the following is not a linear data structure?",
    answers: [
      { text: "Array", correct: false },
      { text: "Linked List", correct: false },
      { text: "Tree", correct: true },
      { text: "Stack", correct: false },
    ],
  },
  {
    question: "What is the worst-case time complexity of quicksort?",
    answers: [
      { text: "O(n^2)", correct: true },
      { text: "O(n log n)", correct: false },
      { text: "O(log n)", correct: false },
      { text: "O(n)", correct: false },
    ],
  },
  {
    question: "Which traversal of a binary search tree gives a sorted list?",
    answers: [
      { text: "Pre-order", correct: false },
      { text: "In-order", correct: true },
      { text: "Post-order", correct: false },
      { text: "Level-order", correct: false },
    ],
  },
  {
    question: "Which data structure uses LIFO (Last In, First Out)?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Heap", correct: false },
      { text: "Deque", correct: false },
    ],
  },
  {
    question: "Which algorithm is used to find the shortest path in a weighted graph?",
    answers: [
      { text: "DFS", correct: false },
      { text: "BFS", correct: false },
      { text: "Dijkstra's Algorithm", correct: true },
      { text: "Kruskal's Algorithm", correct: false },
    ],
  },
  {
    question: "Which of the following is a divide and conquer algorithm?",
    answers: [
      { text: "Bubble Sort", correct: false },
      { text: "Merge Sort", correct: true },
      { text: "Linear Search", correct: false },
      { text: "Selection Sort", correct: false },
    ],
  },
  {
    question: "What is the height of a balanced binary tree with n nodes?",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(n log n)", correct: false },
      { text: "O(log n)", correct: true },
      { text: "O(1)", correct: false },
    ],
  },
  {
    question: "Which data structure is best suited for implementing recursion?",
    answers: [
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
      { text: "Linked List", correct: false },
      { text: "Heap", correct: false },
    ],
  },
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let intervalId;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// Event Listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// Functions
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  answersDisabled = false;
  clearInterval(intervalId);
  timer.style.backgroundColor = "";
  timer.style.color = "";
  timer.textContent = "";
  ring.style.background = "";

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  ring.style.display = "block";
  let totalTime = 30;
  let timeLeft = totalTime;

  intervalId = setInterval(() => {
    timer.textContent = `${timeLeft}s`;
    let percent = ((totalTime - timeLeft) / totalTime) * 100;
    ring.style.background = `conic-gradient(#00bfff ${percent}%, #ccc ${percent}%)`;

    if (timeLeft <= 0) {
      clearInterval(intervalId);
      timer.textContent = "Time up";
      timer.style.backgroundColor = "red";
      timer.style.color = "white";
      answersDisabled = true;
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    }

    timeLeft--;
  }, 1000);

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;
  clearInterval(intervalId);

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
    button.disabled = true;
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    nextQuestion();
  }, 1500);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  clearInterval(intervalId);
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
