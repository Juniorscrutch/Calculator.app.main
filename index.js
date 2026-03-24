const billInput = document.getElementById("amount");
const peopleInput = document.getElementById("people");
const buttons = document.querySelectorAll(".tips button");
const customInput = document.querySelector(".tips input");

const tipDisplay = document.getElementById("tip-amount");
const totalDisplay = document.getElementById("total");
const resetBtn = document.querySelector(".reset-btn");
const peopleError = document.getElementById("people-error");

let currentTip = 0;

function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseFloat(peopleInput.value);

  if (people === 0) {
    peopleError.style.display = "block";
    return;
  } else {
    peopleError.style.display = "none";
  }
  if (!bill || !people || !currentTip) return;

  const tipAmount = (bill * currentTip) / 100 / people;
  const total = bill / people + tipAmount;

  tipDisplay.textContent = "$" + tipAmount.toFixed(2);
  totalDisplay.textContent = "$" + total.toFixed(2);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const tip = parseInt(button.textContent);
    currentTip = tip;
    customInput.value = "";
    calculate();
  });
});

customInput.addEventListener("input", () => {
  currentTip = parseFloat(customInput.value);
  calculate();
});

billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customInput.value = "";

  currentTip = 0;

  tipDisplay.textContent = "$0.00";
  totalDisplay.textContent = "$0.00";
});
