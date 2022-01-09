
let up  = document.querySelector('.up');
let lo = document.querySelector('.lo');
let num = document.querySelector('.num');
let sym = document.querySelector('.sym');
let len = document.querySelector('.len');
let display = document.querySelector('.display');
let find = document.querySelector('.button');
let reset = document.querySelector('.reset');

let upa = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let loa = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numa = ['0','1','2','3','4','5','6','7','8','9'];
let syma = ['@','!','%','$','#','*','^'];

find.addEventListener("click",solve);
let show = "";

reset.addEventListener("click",fun);
function fun(){
	location.reload();
}

function solve(){
	let lenvalue = len.value;

	let upc = up.checked;
	let loc = lo.checked;
	let numc = num.checked;
	let symc = sym.checked;
	while(lenvalue--){
		let chooseArr = Math.floor(Math.random()*4); // 0 to 4

		if(chooseArr == 0 && upc){
			let ran = Math.floor(Math.random()*26);
			show += upa[ran];
		}else if(chooseArr == 1 && loc){
			let ran = Math.floor(Math.random()*26);
			show += loa[ran];
		}else if(chooseArr == 2 && numc){
			let ran = Math.floor(Math.random()*10);
			show += numa[ran];
		}else if(chooseArr == 3 && symc){
			let ran = Math.floor(Math.random()*7);
			show += syma[ran];
		}else{
			if(upc){
				let ran = Math.floor(Math.random()*26);
				show += upa[ran];
			}else if(loc){
				let ran = Math.floor(Math.random()*26);
				show += loa[ran];
			}else if(numc){
				let ran = Math.floor(Math.random()*10);
				show += numa[ran];
			}else if(symc){
				let ran = Math.floor(Math.random()*7);
				show += syma[ran];
			}
		}
	}
	display.textContent = show;
	show = "";
}