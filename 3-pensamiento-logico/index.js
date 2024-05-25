function oddNumbersUpTo(number) {
  let oddNumbers = [];
  for (let i = 1; i <= number; i += 2) {
    oddNumbers.push(i);
  }
  return oddNumbers;
}