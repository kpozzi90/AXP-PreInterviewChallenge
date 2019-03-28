//this function will allow you to enter a whole number before the decimal place and will return the fraction as a string
const decimalToFraction = (num) => {
  if (num === Math.floor(num)) return '0/1'
  let remainder = parseFloat('.' + num.toString().split('.')[1])
  let numerator = 1;
  let denominator = 1;
  let fraction = 1;
  while (fraction !== remainder) {
    if (fraction > remainder) {
      denominator++;
    } else {
      numerator++
    };
    fraction = Math.floor(numerator / denominator * 100) / 100;
  }
  return numerator.toString() + '/' + denominator.toString();
}