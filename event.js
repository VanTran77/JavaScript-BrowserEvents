var numOne = document.getElementById('num-1');
var numTwo = document.getElementById('num-2');
var addSum = document.getElementById('add-sum');

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);

function add(){
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    // var one = numOne.value;
    // var two = numTwo.value;
    // addSum.innerHTML = "Your sum is  -: " + (one+two);
    addSum.innerHTML = "Your sum is: " + (one+two);
    }
