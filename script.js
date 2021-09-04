let billInput = 0;
let currButtonSelected = null;
let tipPercentage = 0;
let numberOfPeople = 0;


const selectTipOnClick = (buttonSelected) => {

	if (document.getElementById('custom-input').value != '') {
		document.getElementById('custom-input').value = '';
	}

	if (!currButtonSelected) { // when there is no currButtonSelected
		currButtonSelected = buttonSelected;
	} else if (currButtonSelected == buttonSelected) { // when the button selected is clicked
		return;
	} else if (currButtonSelected != buttonSelected) { // update the old button and set the new button
		currButtonSelected.style.backgroundColor = '#00494d';
		currButtonSelected.style.color = '#fff';
		currButtonSelected = buttonSelected;
	}

	buttonSelected.style.backgroundColor = '#26c0ab';
	buttonSelected.style.color = '#00494d';

	tipPercentage = parseFloat(buttonSelected.innerHTML.split('').filter(val => val != '%').join('')) / 100;

	console.log(tipPercentage);

	updateTipAmountPerPerson();

}

const setCustomPercent = () => {

	if (currButtonSelected) {
		currButtonSelected.style.backgroundColor = '#00494d';
		currButtonSelected.style.color = '#fff';
		currButtonSelected = null;
	}

	tipPercentage = parseFloat(document.getElementById('custom-input').value) / 100;
	console.log(tipPercentage);

	updateTipAmountPerPerson();

}

const updateBillInput = () => {

	billInput = parseFloat(document.getElementById('bill-subtotal-input').value);
	console.log(billInput);

	updateTipAmountPerPerson();

}

const updateNumberOfPeople = () => {

	numberOfPeople = parseFloat(document.getElementById('number-people-input').value);
	console.log(numberOfPeople);

	updateTipAmountPerPerson();

}

const updateTipAmountPerPerson = () => {

	const tipAmountString = '$' + parseFloat((billInput * tipPercentage) / numberOfPeople).toFixed(2);

	if (tipAmountString != '$NaN' && tipAmountString != '$Infinity' & tipAmountString != '%-Infinity') {
		document.getElementById('tip-amount-cash').innerHTML = tipAmountString;
		updateTotalAmountPerPerson()
	} else {
		document.getElementsByClassName('tip-total-cash').innerHTML = '$0.00';
	}

}

const updateTotalAmountPerPerson = () => {

	const totalAmountString = '$' + ((billInput + (billInput * tipPercentage)) / numberOfPeople).toFixed(2);
	document.getElementById('total-amount-cash').innerHTML = totalAmountString;

}

const resetButtonClicked = () => {

	billInput = 0;
	currButtonSelected = null;
	tipPercentage = 0;
	numberOfPeople = 0;

	const temp = document.getElementsByClassName('select-tip-buttons');

	for (let i = 0; i < temp.length - 1; i++) {
		temp[i].style.backgroundColor = '#00494d';
		temp[i].style.color = '#fff';
	}

	document.getElementById('bill-subtotal-input').value = '';
	document.getElementById('number-people-input').value = '';
	document.getElementById('custom-input').value = '';
	document.getElementById('tip-amount-cash').innerHTML = '$0.00';
	document.getElementById('total-amount-cash').innerHTML = '$0.00';

}