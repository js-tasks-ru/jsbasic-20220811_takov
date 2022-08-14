function factorial(n) {
  let result = 1;

  if (n === 0) {
    return n = 1;
  };

  for ( result; n > 1; n--) {
    result = result * n;
  }
  return result
}

factorial(3);
factorial(5);
factorial(1);
factorial(0);