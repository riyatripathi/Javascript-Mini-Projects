console.log('calculator.js');
const result = document.querySelector('.result');

const onebyx = document.querySelector('.onebyx');
const xsqr = document.querySelector('.xsqr');
const underootx = document.querySelector('.underootx');
const C = document.querySelector('.C');

const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const multiply = document.querySelector('.multiply');

const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const subtract = document.querySelector('.subtract');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const add = document.querySelector('.add');

const negate = document.querySelector('.negate');
const zero = document.querySelector('.zero');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.equal');


let str = "";

function addon(num){
	str += num;
	result.value = str;
}

C.addEventListener("click",()=>{
	window.location.href = window.location.href;
})

equal.addEventListener("click",()=>{
	result.value = eval(str);
	str="";
})

onebyx.addEventListener("click",()=>{
	result.value = 1/eval(str);
	str="";
})
xsqr.addEventListener("click",()=>{
	result.value = eval(str)*eval(str);
	str="";
})
underootx.addEventListener("click",()=>{
	result.value = Math.sqrt(eval(str));
	str="";
})

seven.addEventListener("click",()=>{
	addon(7);
})
eight.addEventListener("click",()=>{
	addon(8);
})
nine.addEventListener("click",()=>{
	addon(9);
})
multiply.addEventListener("click",()=>{
	addon('*');
})


four.addEventListener("click",()=>{
	addon(4);
})
five.addEventListener("click",()=>{
	addon(5);
})
six.addEventListener("click",()=>{
	addon(6);
})
subtract.addEventListener("click",()=>{
	addon('-');
})


one.addEventListener("click",()=>{
	addon(1);
})
two.addEventListener("click",()=>{
	addon(2);
})
three.addEventListener("click",()=>{
	addon(3);
})
add.addEventListener("click",()=>{
	addon('+');
})


negate.addEventListener("click",()=>{
	result.value = eval(str)*(-1);
	str=`${result.value}`;
	console.log(str);
})
zero.addEventListener("click",()=>{
	addon('0');
})
decimal.addEventListener("click",()=>{
	addon('.');
})



