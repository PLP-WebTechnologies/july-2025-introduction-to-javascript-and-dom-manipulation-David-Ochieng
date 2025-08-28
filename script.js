// ================================
// Part 1: Variables and Conditionals
// ================================
let userAge; // variable to hold user input

document.getElementById("checkAgeBtn").addEventListener("click", () => {
  userAge = parseInt(document.getElementById("ageInput").value);

  if (isNaN(userAge)) {
    document.getElementById("userOutput").textContent = "❌ Please enter a valid number!";
  } else if (userAge >= 18) {
    document.getElementById("userOutput").textContent = "✅ You are eligible to vote!";
  } else {
    document.getElementById("userOutput").textContent = "⚠️ You are too young to vote.";
  }
});

// ================================
// Part 2: Functions
// ================================

// Function 1: Greet user
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript 🚀`;
}

// Function 2: Calculate square of a number
function squareNumber(num) {
  return num * num;
}

document.getElementById("greetBtn").addEventListener("click", () => {
  const name = prompt("Enter your name:");
  const greeting = greetUser(name || "Guest");
  document.getElementById("greetOutput").textContent = greeting;

  // Example of reusability — use the square function
  console.log(`Square of 5 is: ${squareNumber(5)}`);
});

// ================================
// Part 3: Loops
// ================================

// Example 1: Countdown using for loop
document.getElementById("countdownBtn").addEventListener("click", () => {
  const countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = ""; // clear old results

  for (let i = 5; i >= 1; i--) {
    const li = document.createElement("li");
    li.textContent = `Countdown: ${i}`;
    countdownList.appendChild(li);
  }
});

// Example 2: Loop through an array
const colors = ["Red", "Green", "Blue", "Yellow"];
colors.forEach((color, index) => {
  console.log(`Color ${index + 1}: ${color}`);
});

// ================================
// Part 4: DOM Manipulation
// ================================

// Interaction 1: Toggle highlight
document.getElementById("toggleBtn").addEventListener("click", () => {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Interaction 2: Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New dynamic item";
  document.getElementById("dynamicList").appendChild(newItem);
});

// Interaction 3: Change text content on page load
document.getElementById("userOutput").textContent = "Welcome! Enter your age below:";
