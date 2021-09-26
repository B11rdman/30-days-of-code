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
  const n = parseInt(readLine(), 10);
  const arr = n.toString(2).split("");
  let max = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") count++;
    if (arr[i] === "0") {
      if (count > max) max = count;
      count = 0;
    }
    if (i === arr.length - 1 && count > max) max = count;
  }
  console.log(max);
}
