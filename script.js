/*
Diane Granger
Day 4 Assignment
Write a JavaScript program to set the background color of a paragraph.
JavaScript Programming Essentials
LetsUpgrade
November 16, 2022
*/

function setBackground() {
  // Initialize docBody to the <body> element
  docBody = document.getElementsByTagName("body")[0];
  
    // Get all the <p> elements that are descendants of the body
    pBodyElements = docBody.getElementsByTagName("p");

    // Get first <p> element
    p1 = pBodyElements[0];

    // Set the background color of the first <p> element
    p1.style.background = "rgb(255, 0, 0)";

    // Get the second <p> element
    p2 = pBodyElements[1];

    // Set the background color of the second <p> element
    p2.style.background = "rgb(255, 255, 0)";
}