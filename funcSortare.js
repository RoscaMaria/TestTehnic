function compareScore() {
	var scor;
	scor = document.getElementById("quantity").value;
	alert(scor);
	
	if(scor <= 29){
		alert("mai mic ca 29");
		
		document.getElementById("lvl1").style.display = "block";
	}else if(scor > 29 && scor <= 79){
		document.getElementById("lvl2").style.display = "block";
		
	}else if(scor > 79 && scor <= 100){
		document.getElementById("lvl3").style.display = "block";
		
	}
}
/*functioneaza numai daca pun aceeasi valoare de 2 ori*/