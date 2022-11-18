"use strict";

// learned this here:  https:stackoverflow.com/questions/9186346/javascript-onclick-increment-number
function incrementValue()
{
var value = parseFloat(document.getElementById('product_qty').innerHTML, 10);
console.log(value);
value = isNaN(value) ? 0 : value;
value++;
var amount = parseFloat(document.getElementById('amount').innerHTML, 10);
console.log(parseFloat(amount));
var amount2 = parseFloat(document.getElementById('amount2').innerHTML, 10);
console.log(parseFloat(amount2));
amount = value * 65.00;
amount2 = amount;
document.getElementById('product_qty').innerHTML = value;
document.getElementById('amount').innerHTML = amount;
document.getElementById('amount2').innerHTML = amount2;
}

function decreaseValue()
{
var value = parseFloat(document.getElementById('product_qty').innerHTML, 10);
value = isNaN(value) ? 0 : value;
value--;
if (value < 2) {
  value = 1;
}
var amount = parseFloat(document.getElementById('amount').innerHTML, 10);
console.log(parseFloat(amount));
var amount2 = parseFloat(document.getElementById('amount2').innerHTML, 10);
console.log(parseFloat(amount2));
amount = value * 65.00;
amount2 = amount;
document.getElementById('product_qty').innerHTML = value;
document.getElementById('amount').innerHTML = amount;
document.getElementById('amount2').innerHTML = amount2;
}
