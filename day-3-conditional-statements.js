"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  const N = parseInt(readLine(), 10);
  const rem = N % 2;

  if (rem === 1) {
    console.log("Weird");
  } else if (rem === 0 && N >= 2 && N <= 5) {
    console.log("Not Weird");
  } else if (rem === 0 && N >= 6 && N <= 20) {
    console.log("Weird");
  } else if (rem === 0 && N > 20) {
    console.log("Not Weird");
  }
}
