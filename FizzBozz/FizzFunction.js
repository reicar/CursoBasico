for (var x = 1; x <= 100; x++) {
  if(esDivisible(x,3) & !esDivisible(x,5)) {
      document.write(x + "   Fizz");
  } else if(!esDivisible(x,3) & esDivisible(x,5)) {
      document.write(x + "   Buzz");
  } else if(esDivisible(x,3) & esDivisible(x,5)) {
      document.write(x + "   Fizzbuzz");
  } else {
      document.write(x);
  }

  document.write("<br/>");
}

function esDivisible(numero,divisor) {
  if (numero % divisor == 0) {
    return true;
  } else {
    return false;
  }
}
