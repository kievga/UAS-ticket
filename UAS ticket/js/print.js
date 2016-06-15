function myPrint1(){
	var printContent = document.getElementById("ker").innerHTML;
	var restorepage = document.body.innerHTML;
	document.body.innerHTML = printContent;
	window.print();
	document.body.innerHTML = restorepage;
	}
function myPrint2(){
	var printContent = document.getElementById("pes").innerHTML;
	var restorepage = document.body.innerHTML;
	document.body.innerHTML = printContent;
	window.print();
	document.body.innerHTML = restorepage;
	}
function myPrint3(){
	var printContent = document.getElementById("kap").innerHTML;
	var restorepage = document.body.innerHTML;
	document.body.innerHTML = printContent;
	window.print();
	document.body.innerHTML = restorepage;
	}
function myPrint4(){
	var printContent = document.getElementById("tra").innerHTML;
	var restorepage = document.body.innerHTML;
	document.body.innerHTML = printContent;
	window.print();
	document.body.innerHTML = restorepage;
	}