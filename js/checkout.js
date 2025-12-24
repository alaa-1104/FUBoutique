
function message(){
	var Name = document.getElementById('name');
	var phonenumber = document.getElementById('phonenumber');
	var adress = document.getElementById('adress');
	var cardnumber = document.getElementById('cardnumber');
	var expdate = document.getElementById('expdate');
	const success = document.getElementById('success');
	const danger = document.getElementById('danger');
	
	
if (Name.value === '' || phonenumber.value === '' || adress.value === '' || cardnumber.value === '' || expdate.value === '')
    {
		danger.style.display = 'block';
	}
	else{
		setTimeout(() => {
			Name.value = '';
			phonenumber.value = '';
			adress.value = '';
			cardnumber.value = '';
			expdate.value = '';
		},2000);
		success.style.display = 'block';
	}
	setTimeout(()=> {
		danger.style.display = 'none';
		success.style.display = 'none';
	},6000);
}
