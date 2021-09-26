function processData(input) {
  input = input.split("\n");
  const phoneBook = [];
  const n = parseInt(input[0]);
  const m = input.length;

  for (let i = 1; i <= n; i++) {
    let contactArray = input[i].split(" ");
    phoneBook[contactArray[0]] = contactArray[1];
  }

  for (let i = n + 1; i < m; i++) {
    if (phoneBook[input[i]]) {
      console.log(`${input[i]}=${phoneBook[input[i]]}`);
    } else {
      console.log("Not found");
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
