// Interactive demo of the complaint lifecycle from the design document:
// Submitted -> Received -> Assigned -> In Progress -> Resolved -> Closed
const notes = [
  "You submitted the report with a photo and location. A reference number was created.",
  "The system received your report and checked that it is complete.",
  "The report was assigned to the water services department.",
  "A maintenance team is working on the leak.",
  "The fault is fixed. You were sent an SMS and an email.",
  "The report is closed. You can still view it in your history."
];

const steps = document.querySelectorAll("#steps li");
const note = document.getElementById("stepNote");
const button = document.getElementById("nextStep");
let current = 0;

function render() {
  steps.forEach((step, i) => {
    step.classList.toggle("done", i < current);
    step.classList.toggle("current", i === current);
  });
  note.textContent = notes[current];
  button.textContent = current === steps.length - 1 ? "Start again" : "Move to next status";
}

button.addEventListener("click", () => {
  current = (current + 1) % steps.length;
  render();
});

render();
