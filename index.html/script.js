let display = document.getElementById("display");
let historyList = document.getElementById("history-list");
let body = document.body;

// Value add karna (buttons / keyboard se)
function appendValue(value) {
  display.value += value;
}

// Clear screen
function clearDisplay() {
  display.value = "";
}

// Delete ek character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Calculate expression
function calculate() {
  try {
    let expression = display.value
      .replace(/sin/g, "Math.sin")
      .replace(/cos/g, "Math.cos")
      .replace(/tan/g, "Math.tan")
      .replace(/log/g, "Math.log")
      .replace(/√/g, "Math.sqrt")
      .replace(/\^/g, "");

    let result = eval(expression);  // eval se result niklega
    addToHistory(display.value + " = " + result);
    display.value = result;
  } catch (e) {
    alert("Invalid Expression");
  }
}

// History me add karna
function addToHistory(entry) {
  if (!historyList) return;
  let li = document.createElement("li");
  li.textContent = entry;
  historyList.prepend(li);
}

// Dark / Light mode toggle
function toggleTheme() {
  body.classList.toggle("light-mode");
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if ((e.key >= 0 && e.key <= 9) || "+-*/().".includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    calculate();
  } else if (e.key === "Backspace") {
    deleteChar();
  }
});

