"use strict";

var _input = "";
var _index = 0;
process.stdin.on("data", (data) => {
  _input += data;
});
process.stdin.on("end", () => {
  _input = _input.split(new RegExp("[ \n]+"));
  main();
});
function read() {
  return _input[_index++];
}

/**** Ignore above this line. ****/

class Person {
  constructor(firstName, lastName, identification) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = identification;
  }

  printPerson() {
    console.log("Name: " + this.lastName + ", " + this.firstName + "\nID: " + this.idNumber);
  }
}

class Student extends Person {
  /*
   *   Class Constructor
   *
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */

  constructor(firstName, lastName, id, scores) {
    super();

    this.firstName = firstName;
    this.lastName = lastName;
    this.idNumber = +id;
    this.scores = [...scores];
  }
  // Write your constructor here

  /*
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here

  calculate() {
    let sum = 0;
    let grade = null;
    this.scores.forEach((s) => (sum += s));

    sum = sum / this.scores.length;

    if (sum >= 90 && sum <= 100) {
      grade = "O";
    } else if (sum >= 80 && sum < 90) {
      grade = "E";
    } else if (sum >= 70 && sum < 80) {
      grade = "A";
    } else if (sum >= 55 && sum < 70) {
      grade = "P";
    } else if (sum >= 40 && sum < 55) {
      grade = "D";
    } else if (sum < 40) {
      grade = "T";
    }

    return grade;
  }
}

function main() {
  let firstName = read();
  let lastName = read();
  let id = +read();
  let numScores = +read();
  let testScores = new Array(numScores);

  for (var i = 0; i < numScores; i++) {
    testScores[i] = +read();
  }

  let s = new Student(firstName, lastName, id, testScores);
  s.printPerson();
  s.calculate();
  console.log("Grade: " + s.calculate());
}
