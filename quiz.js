function checkAnswer() {
  const correctAnswer = "4"; // Correct answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

  const feedback = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";
  } else {
      feedback.textContent = "That's incorrect. Try again!";
      feedback.style.color = "red";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
