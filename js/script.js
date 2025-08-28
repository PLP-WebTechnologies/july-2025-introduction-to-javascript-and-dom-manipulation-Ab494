// ----------------- Part 1: Variables + Conditionals -----------------
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// ----------------- Part 2: Custom Functions -----------------
function greet() {
  let name = document.getElementById("nameInput").value;
  if (name === "") {
    document.getElementById("output").innerText = "Please enter your name!";
  } else {
    document.getElementById("output").innerText = "Hello, " + name + " 👋";
  }
}

function addNumbers(a, b) {
  return a + b;
}
console.log("5 + 3 = " + addNumbers(5, 3));

// ----------------- Part 3: Loops -----------------
function showNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old content

  // For loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Number: " + i;
    list.appendChild(li);
  }

  // While loop example
  let n = 1;
  while (n <= 3) {
    console.log("While loop count: " + n);
    n++;
  }
}

// ----------------- Part 4: DOM Interactions -----------------
// 1. Change text content
document.getElementById("intro").innerText = "This text was changed with JavaScript!";

// 2. Change style
document.getElementById("title").style.color = "green";

// 3. Add dynamic content
document.getElementById("output").innerText = "Click the button to get greeted!";
