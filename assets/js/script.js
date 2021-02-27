function display(value){
	let input = document.getElementById("input");
	input.value += value;
}


function calc(){
	try {
    	var input = document.getElementById("input");
		var inputValue = input.value;
		inputValue.replace(/[^-()\d/*+.]/g, '');
		input.value = eval(inputValue);
	} catch (e) {
        alert("Input number or syntax error");
       	input.value = "";
	}
}


function clearDis(){
	let input = document.getElementById("input");
	input.value = "";
}