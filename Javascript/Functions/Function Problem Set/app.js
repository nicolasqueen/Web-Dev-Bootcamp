/*

isEven()

Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise.

isEven(4);
isEven(21);
isEven(68);
isEven(333);

*/

function isEven(num) {
  if (num % 2 === 0)
    return true
  else
    return false
}

/*

factorial()

Write a function factorial() which takes a single numeric argument and returns the factorial of that number.

4! is 4 x 3 x 2 x 1
6! is 6 x 5 x 4 x 3 x 2 x 1
0! is 1

factorial(5); //120
factorial(2); //2
factorial(10); //3628800
factorial(0); //1


*/

function factorial(integer) {
  if (integer == 0 || integer == 1)
    return 1;
  for (var i = integer - 1; i >= 1; i--) {
    integer *= i;

  }
  return integer;
}


/*

kebabToSnake()

write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version.

Basically, replace "-" with "_"'s

kebabToSnake("hello-world"); //"hello_world"

*/

function kebabToSnake(string) {
  newString = string.replace(/-/g, "_");
  return newString;
}



