function f(x, y, z) {
  let a = x + y;
  let b = a * z;
  let c = Math.sin(b);
  return c;
}

function calculateSineOfScaledSum(firstAddend, secondAddend, scaleFactor) {
  let initialSum = firstAddend + secondAddend;
  let scaledValue = initialSum * scaleFactor;
  let sineResult = Math.sin(scaledValue);
  return sineResult;
}
