const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const answerContainer = document.getElementById("answer-container");
const progressBar = document.getElementById("progress");
const questionText = document.getElementById("question-text");
const resultScreen = document.getElementById("result-screen");
const spanQuestionIndex = document.getElementById("current-question");
const spanScore = document.getElementById("score");
const finalScore = document.getElementById("final-score");
const maxScore = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");
const spanTotalQuestion = document.getElementById("total-question");
let currenQuestionIndex = 0;
let score = 0;
const progressPercent = 0;
const quizQuestions = [
  {
    question: "What is the capital of Andhra Pradesh?",
    answers: [
      { text: "Visakhapatnam", correct: "incorrect" },
      { text: "Amaravati", correct: "correct" },
      { text: "Vijayawada", correct: "incorrect" },
      { text: "Guntur", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Arunachal Pradesh?",
    answers: [
      { text: "Itanagar", correct: "correct" },
      { text: "Gangtok", correct: "incorrect" },
      { text: "Kohima", correct: "incorrect" },
      { text: "Dispur", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Assam?",
    answers: [
      { text: "Guwahati", correct: "incorrect" },
      { text: "Dispur", correct: "correct" },
      { text: "Shillong", correct: "incorrect" },
      { text: "Imphal", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Bihar?",
    answers: [
      { text: "Patna", correct: "correct" },
      { text: "Gaya", correct: "incorrect" },
      { text: "Ranchi", correct: "incorrect" },
      { text: "Muzaffarpur", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Chhattisgarh?",
    answers: [
      { text: "Raipur", correct: "correct" },
      { text: "Bilaspur", correct: "incorrect" },
      { text: "Durg", correct: "incorrect" },
      { text: "Korba", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Goa?",
    answers: [
      { text: "Panaji", correct: "correct" },
      { text: "Margao", correct: "incorrect" },
      { text: "Vasco da Gama", correct: "incorrect" },
      { text: "Ponda", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Gujarat?",
    answers: [
      { text: "Ahmedabad", correct: "incorrect" },
      { text: "Surat", correct: "incorrect" },
      { text: "Gandhinagar", correct: "correct" },
      { text: "Rajkot", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Haryana?",
    answers: [
      { text: "Panipat", correct: "incorrect" },
      { text: "Gurugram", correct: "incorrect" },
      { text: "Chandigarh", correct: "correct" },
      { text: "Ambala", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Himachal Pradesh?",
    answers: [
      { text: "Manali", correct: "incorrect" },
      { text: "Dharamshala", correct: "incorrect" },
      { text: "Shimla", correct: "correct" },
      { text: "Kullu", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Jharkhand?",
    answers: [
      { text: "Jamshedpur", correct: "incorrect" },
      { text: "Ranchi", correct: "correct" },
      { text: "Dhanbad", correct: "incorrect" },
      { text: "Bokaro", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Karnataka?",
    answers: [
      { text: "Mysuru", correct: "incorrect" },
      { text: "Mangaluru", correct: "incorrect" },
      { text: "Bengaluru", correct: "correct" },
      { text: "Hubballi", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Kerala?",
    answers: [
      { text: "Kochi", correct: "incorrect" },
      { text: "Thiruvananthapuram", correct: "correct" },
      { text: "Kozhikode", correct: "incorrect" },
      { text: "Alappuzha", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Madhya Pradesh?",
    answers: [
      { text: "Indore", correct: "incorrect" },
      { text: "Bhopal", correct: "correct" },
      { text: "Gwalior", correct: "incorrect" },
      { text: "Jabalpur", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Maharashtra?",
    answers: [
      { text: "Mumbai", correct: "correct" },
      { text: "Pune", correct: "incorrect" },
      { text: "Nagpur", correct: "incorrect" },
      { text: "Nashik", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Manipur?",
    answers: [
      { text: "Imphal", correct: "correct" },
      { text: "Aizawl", correct: "incorrect" },
      { text: "Shillong", correct: "incorrect" },
      { text: "Kohima", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Meghalaya?",
    answers: [
      { text: "Aizawl", correct: "incorrect" },
      { text: "Shillong", correct: "correct" },
      { text: "Kohima", correct: "incorrect" },
      { text: "Imphal", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Mizoram?",
    answers: [
      { text: "Aizawl", correct: "correct" },
      { text: "Agartala", correct: "incorrect" },
      { text: "Imphal", correct: "incorrect" },
      { text: "Kohima", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Nagaland?",
    answers: [
      { text: "Kohima", correct: "correct" },
      { text: "Dimapur", correct: "incorrect" },
      { text: "Aizawl", correct: "incorrect" },
      { text: "Itanagar", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Odisha?",
    answers: [
      { text: "Cuttack", correct: "incorrect" },
      { text: "Bhubaneswar", correct: "correct" },
      { text: "Puri", correct: "incorrect" },
      { text: "Rourkela", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Punjab?",
    answers: [
      { text: "Ludhiana", correct: "incorrect" },
      { text: "Amritsar", correct: "incorrect" },
      { text: "Chandigarh", correct: "correct" },
      { text: "Jalandhar", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Rajasthan?",
    answers: [
      { text: "Jodhpur", correct: "incorrect" },
      { text: "Udaipur", correct: "incorrect" },
      { text: "Jaipur", correct: "correct" },
      { text: "Ajmer", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Sikkim?",
    answers: [
      { text: "Gangtok", correct: "correct" },
      { text: "Dispur", correct: "incorrect" },
      { text: "Aizawl", correct: "incorrect" },
      { text: "Kohima", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Tamil Nadu?",
    answers: [
      { text: "Madurai", correct: "incorrect" },
      { text: "Coimbatore", correct: "incorrect" },
      { text: "Chennai", correct: "correct" },
      { text: "Tiruchirappalli", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Telangana?",
    answers: [
      { text: "Hyderabad", correct: "correct" },
      { text: "Warangal", correct: "incorrect" },
      { text: "Karimnagar", correct: "incorrect" },
      { text: "Khammam", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Tripura?",
    answers: [
      { text: "Agartala", correct: "correct" },
      { text: "Aizawl", correct: "incorrect" },
      { text: "Imphal", correct: "incorrect" },
      { text: "Shillong", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Uttar Pradesh?",
    answers: [
      { text: "Lucknow", correct: "correct" },
      { text: "Varanasi", correct: "incorrect" },
      { text: "Kanpur", correct: "incorrect" },
      { text: "Prayagraj", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of Uttarakhand?",
    answers: [
      { text: "Dehradun", correct: "correct" },
      { text: "Nainital", correct: "incorrect" },
      { text: "Haridwar", correct: "incorrect" },
      { text: "Rishikesh", correct: "incorrect" },
    ],
  },
  {
    question: "What is the capital of West Bengal?",
    answers: [
      { text: "Howrah", correct: "incorrect" },
      { text: "Kolkata", correct: "correct" },
      { text: "Siliguri", correct: "incorrect" },
      { text: "Darjeeling", correct: "incorrect" },
    ],
  },
];

startBtn.addEventListener("click", (e) => {
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  ShowQuestion();
});
function ShowQuestion() {
  if (currenQuestionIndex === quizQuestions.length) {
    ShowResults();
  } else {
    const currentQuestion = quizQuestions[currenQuestionIndex++];
    questionText.innerHTML = currentQuestion.question;
    const progressPercent = (currenQuestionIndex / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%";
    CreateAnswerList(currentQuestion);
    spanQuestionIndex.innerHTML = currenQuestionIndex;
    spanTotalQuestion.innerHTML = quizQuestions.length;
    spanScore.innerHTML = score;
  }
}
function CreateAnswerList(currentQuestion) {
  answerContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.classList.add("answer-btn");
    answerContainer.appendChild(btn);
    btn.dataset.correct = answer.correct;
    btn.addEventListener("click", (e) => {
      if (e.target.dataset.correct === "correct") score++;
      const answerBtn=e.target.parentElement.querySelectorAll(".answer-btn");
      answerBtn.forEach((e)=>{
          e.classList.add(e.dataset.correct);          
      })
      // e.target.classList.add(e.target.dataset.correct);
      debugger;
      setTimeout(() => {
        ShowQuestion();
      }, 1500);
    });
  });
}

function ShowResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScore.textContent = score;
  maxScore.innerHTML = quizQuestions.length;
  let message = "";
  const scorePercent = (score / quizQuestions.length) * 100;
  if (scorePercent === 100) message = "Perfect! You are a genius!";
  else if (scorePercent >= 80) message = "Great job! You know your stuff";
  else if (scorePercent >= 60) message = "Good effort! Keep learning";
  else if (scorePercent >= 40) message = "Not bad! Try again to improve";
  else message = "Keep studyig! You will get better";
  console.log(message);

  resultMessage.innerHTML = message;
}
restartBtn.addEventListener("click", () => {
  score = 0;
  currenQuestionIndex = 0;
  //answerContainer.childNodes("button").remove();
  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
});
