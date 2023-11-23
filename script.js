const progressBar = document.getElementsByClassName("progress-bar")[0];
const percentage = document.querySelector(".percentage");
const computedStyle = getComputedStyle(progressBar);
let width = 0;

document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    if (width <= 100) setProgress();
  }, 10);
});

const setProgress = () => {
  width = parseFloat(computedStyle.getPropertyValue("--width")) || width;
  progressBar.style.setProperty("--width", width + 0.01);
  if (width >= 100) width = 100;
  percentage.innerHTML = `${width.toFixed(1)}%`;
};
