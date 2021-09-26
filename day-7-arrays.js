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
  const arr = readLine()
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  let output = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    output += arr[i] + " ";
  }

  console.log(output);
}
