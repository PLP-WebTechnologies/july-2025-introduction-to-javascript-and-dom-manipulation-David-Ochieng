// ================================
// Part 1: Variables + Conditionals
// ================================
let userYear;
let candidates = ["Dave", "Druski", "Janet", "Wanjiku", "Bradley"];

// Votes object initialized with 0 for each candidate
let votes = {};
candidates.forEach(c => votes[c] = 0);

document.getElementById("checkBtn").addEventListener("click", () => {
  userYear = parseInt(document.getElementById("yearInput").value);

  if (isNaN(userYear) || userYear < 1 || userYear > 6) {
    document.getElementById("eligibilityMessage").textContent = "❌ Enter a valid year between 1 and 6.";
    document.getElementById("votingSection").style.display = "none";
  } else if (userYear === 1) {
    document.getElementById("eligibilityMessage").textContent = "⚠️ First years are NOT eligible to vote.";
    document.getElementById("votingSection").style.display = "none";
  } else {
    document.getElementById("eligibilityMessage").textContent = "✅ You are eligible to vote!";
    document.getElementById("votingSection").style.display = "block";
  }
});

// ================================
// Part 2: Functions
// ================================

// Function 1: Cast vote
function castVote(candidate) {
  votes[candidate]++;
  return `You voted for ${candidate}. Thank you!`;
}

// Function 2: Show results
function showResults() {
  let resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";

  // Loop through votes object
  for (let candidate in votes) {
    let li = document.createElement("li");
    li.textContent = `${candidate}: ${votes[candidate]} votes`;
    resultsList.appendChild(li);
  }
}

// ================================
// Part 3: Loops
// ================================
// Example: Display candidates in console
candidates.forEach((c, i) => console.log(`Candidate ${i + 1}: ${c}`));

// ================================
// Part 4: DOM Interactions
// ================================

// Dynamically create candidate voting buttons
let candidateButtonsDiv = document.getElementById("candidateButtons");
candidates.forEach(candidate => {
  let btn = document.createElement("button");
  btn.textContent = `Vote for ${candidate}`;
  btn.classList.add("voteBtn");
  btn.addEventListener("click", () => {
    const message = castVote(candidate);
    document.getElementById("voteMessage").textContent = message;
  });
  candidateButtonsDiv.appendChild(btn);
});

// Show results button
document.getElementById("showResultsBtn").addEventListener("click", () => {
  showResults();
  document.getElementById("resultsList").classList.toggle("highlight");
});

// Extra DOM interaction: add a welcome message
document.getElementById("eligibilityMessage").textContent = "👋 Welcome! Please enter your year of study.";
