const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

const noLabels = [
  "No",
  "Nope",
  "Nah",
  "Still no",
  "Are you sure?",
  "Absolutely not",
  "I love u but no",
  "No... Yes, no",
  "I refuse",
  "Ok fine... no",
];

let yesScale = 1;
let noScale = 1;
let noClickCount = 0;
let noButtonPinned = false;

const applyScales = () => {
  yesButton.style.transform = `scale(${yesScale.toFixed(3)})`;
  noButton.style.transform = `scale(${noScale.toFixed(3)})`;
};

const pinNoButton = () => {
  if (noButtonPinned) {
    return;
  }

  const rect = noButton.getBoundingClientRect();
  noButton.style.position = "fixed";
  noButton.style.left = `${rect.left}px`;
  noButton.style.top = `${rect.top}px`;
  noButton.style.margin = "0";
  noButtonPinned = true;
};

const moveNoButton = () => {
  pinNoButton();

  const rect = noButton.getBoundingClientRect();
  const padding = 12;
  const maxX = Math.max(padding, window.innerWidth - rect.width - padding);
  const maxY = Math.max(padding, window.innerHeight - rect.height - padding);

  const nextX = Math.random() * (maxX - padding) + padding;
  const nextY = Math.random() * (maxY - padding) + padding;

  noButton.style.left = `${nextX}px`;
  noButton.style.top = `${nextY}px`;
};

noButton.addEventListener("click", () => {
  noScale *= 0.9;
  yesScale *= 1.1;

  noClickCount += 1;
  const labelIndex = Math.min(noClickCount, noLabels.length - 1);
  noButton.textContent = noLabels[labelIndex];

  applyScales();
  moveNoButton();
});

yesButton.addEventListener("click", () => {
  yesButton.textContent = "Correct! You are now my Valentine!";
  yesButton.disabled = true;
  noButton.disabled = true;
});
