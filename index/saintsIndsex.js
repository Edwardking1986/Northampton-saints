
function validateFilledOut() {
	if (document.getElementById('newLetter').checkValidity()) {		
		var name = document.getElementById("fname").value;
	    alert("thank you for your request " + name + " the news letter will be sent!");
	}   
}	