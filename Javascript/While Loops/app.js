console.log("Print all numbers between -10 and 19");

var firstNumSet = -10;

while(firstNumSet <= 19){
  console.log(firstNumSet);
  firstNumSet++;
}

console.log("Print all even numbers between 10 and 40");

var secondNumSet = 10;

while(secondNumSet <= 40) {
  console.log(secondNumSet);
  secondNumSet+=2;
}

console.log("Print all odd numbers between 300 and 333");

var thirdNumSet = 301;

while(thirdNumSet <= 333) {
  console.log(thirdNumSet);
  thirdNumSet+=2;
}

console.log("Print all numbers divisible by 5 and 3 between 5 and 50");

var fourthNumSet = 5;

while(fourthNumSet <= 50) {
  if(fourthNumSet % 5 === 0 && fourthNumSet % 3 === 0){
    console.log(fourthNumSet);
  }
  fourthNumSet++;
}