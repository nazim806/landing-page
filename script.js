// DOM Elements
const time = document.getElementById("time"),
  greeting = document.getElementById("greeting"),
  name = document.getElementById("name"),
  focus = document.getElementById("focus");

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? "PM" : "AM";

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1516362494095-89c6e27d4428?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80')";
    greeting.textContent = "Good Morning! ";
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1603029261280-1f3175658ea7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80')";
    greeting.textContent = "Good Afternoon! ";
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80')";
    greeting.textContent = "Good Evening! ";
    document.body.style.color = "white";
  }
}

//Get Name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "Hi There!";
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

// Set Name
function setName(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus.textContent = "[Enter Focus]";
  } else {
    focus.textContent = localStorage.getItem("focus");
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === "keypress") {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("focus", e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
