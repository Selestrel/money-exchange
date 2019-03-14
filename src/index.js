// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var exchange = new Object();

  if (currency > 10000) {
    exchange.error = "You are rich, my friend! We don't have so much coins for exchange";
  } else if (currency > 0) {
    calculateCurrency(currency, exchange);
  }

  return exchange;
}

function calculateCurrency(currency, p) {
  var input = currency;
  if (parseInt(input / 50) > 0) {
    p.H = parseInt(input / 50);
    input = input - p.H * 50;
  }
  if (input > 0 && parseInt(input / 25)) {
    p.Q = parseInt(input / 25);
    input = input - p.Q * 25;
  }
  if (input > 0 && parseInt(input / 10)) {
    p.D = parseInt(input / 10);
    input = input - p.D * 10;
  }
  if (input > 0 && parseInt(input / 5)) {
    p.N = parseInt(input / 5);
    input = input - p.N * 5;
  }
  if (input > 0 && parseInt(input / 1)) {
    p.P = parseInt(input / 1);
    input = input - p.P * 1;
  }
}
