for (var x = 1; x <= 100; x++) {
  if((x % 3 == 0) & (x % 5 != 0)) {
      document.write(x + "   Fizz");
  } else if((x % 3 != 0) & (x % 5 == 0)){
      document.write(x + "   Buzz");
  } else if((x % 3 == 0) & (x % 5 == 0)) {
      document.write(x + "   Fizzbuzz");
  } else {
      document.write(x);
  }

  document.write("<br/>");
}
