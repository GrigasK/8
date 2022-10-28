/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// class Calculator {
//   sum(number1, number2) {
//     console.log(number1 + number2);
//   }

//   subtraction(number1, number2) {
//     console.log(number1 - number2);
//   }
//   multiplication(number1, number2) {
//     console.log(number1 * number2);
//   }
//   division(number1, number2) {
//     console.log(number1 / number2);
//   }
// }

function Calculator(sum, subtraction, multiplication, division) {
  this.sum = function sum(number1, number2) {
    console.log(number1 + number2);
  };

  this.subtraction = function subtraction(number1, number2) {
    console.log(number1 - number2);
  };

  this.multiplication = function multiplication(number1, number2) {
    console.log(number1 * number2);
  };

  this.division = function division(number1, number2) {
    console.log(number1 / number2);
  };
}

const number = new Calculator();
number.sum(6, 6);
number.subtraction(6, 6);
number.multiplication(6, 6);
number.division(6, 6);
