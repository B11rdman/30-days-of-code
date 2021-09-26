function processData(input) {
  const data = input;
  const lines = data.split("\n").slice(1);
  lines.forEach((word) => {
    let even = "";
    let odd = "";

    for (let i = 0; i < word.length; i++) {
      if (i % 2 === 0) {
        even += word[i];
      } else if (word[i] != " " && i % 2 === 1) {
        odd += word[i];
      }
    }
    console.log(even, odd);
  });
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
