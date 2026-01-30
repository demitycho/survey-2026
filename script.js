const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

const noLabels = [
  "No",
  "Nope",
  "Nah",
  "Still no",
  "Are you sure?",
  "Absolutely not",
  "Please stop",
  "This isn't it",
  "I refuse",
  "Ok fine... no",
];

let yesScale = 1;
let noScale = 1;
let noClickCount = 0;

const applyScales = () => {
  yesButton.style.transform = `scale(${yesScale.toFixed(3)})`;
  noButton.style.transform = `scale(${noScale.toFixed(3)})`;
};

noButton.addEventListener("click", () => {
  noScale *= 0.9;
  yesScale *= 1.1;

  noClickCount += 1;
  const labelIndex = Math.min(noClickCount, noLabels.length - 1);
  noButton.textContent = noLabels[labelIndex];

  applyScales();
});

yesButton.addEventListener("click", () => {
  yesButton.textContent = "Correct.";
  yesButton.disabled = true;
  noButton.disabled = true;
});
