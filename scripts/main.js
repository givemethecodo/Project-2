"use strict";

// learned this here:  https://stackoverflow.com/questions/9186346/javascript-onclick-increment-number
function incrementValue()
{
var value = parseInt(document.getElementById('product_qty').innerHTML, 10);
console.log(value);
value = isNaN(value) ? 0 : value;
value++;
document.getElementById('product_qty').innerHTML = value;
}

function decreaseValue()
{
var value = parseInt(document.getElementById('product_qty').innerHTML, 10);
value = isNaN(value) ? 0 : value;
value--;
if (value < 2) {
  value = 1;
}
document.getElementById('product_qty').innerHTML = value;
}
