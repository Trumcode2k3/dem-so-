const progress = document.getElementById("progress");
const preview = document.getElementById("preview");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 1;

next.addEventListener("click", function () {
  changeStep(1);
});
preview.addEventListener("click", function () {
  changeStep(-1);
});

function changeStep(step) {
  currentActive += step;
  update();
}

function update() {
  steps.forEach((step, idx) => {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  preview.disabled = currentActive === 1;
  next.disabled = currentActive === steps.length;
  progress.style.width = ((currentActive - 1) / (steps.length - 1)) * 100 + "%";
}
