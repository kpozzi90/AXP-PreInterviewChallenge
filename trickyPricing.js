const trickyPricing = (prices, size) => {
  let newPrices = prices.slice();
  let roundAmount = 0;
  let decrease;
  //iterate through possible decreases in price
  for (let i = 5; i > 0; i--) {
    //calculate the sum of a theoretical order total with this decrease in price
    let cents = i / 100;
    let total = (1000 - cents) * size;
    total = Math.round(total * 100) / 100
    let lastNum = 0;
    //find last digit of order total
    let str = total.toString().split('.')[1][1]
    if (str) lastNum = parseInt(str);
    //track how much an order would round up or down with this decrease in price
    let adj = 0;
    if (lastNum <= 5) {
      if(lastNum > 2) {
        adj = 5 - lastNum
      } else if (lastNum > 0) {
        adj = -lastNum
      }
    } else {
      if (lastNum >7) {
        adj = 10 - lastNum;
      } else {
        adj = 5 - lastNum
      }
    }
    //if this round is higher or equal to previous round amount, set this as new price decrease
    //set the OR EQUAL logic because order total will always be higher in later iterations of this loop
    if (adj >= roundAmount) {
      decrease = i;
      roundAmount = adj;
    }
  }
  //convert decrease to decimal and subtract from each price;
  decrease = decrease / 100;
  for (let i = 0; i < newPrices.length; i++) {
    newPrices[i] = newPrices[i] - decrease;
  }
  return newPrices;
}

trickyPricing([20, 14], 3)