 
 function searchFilter () {
 	var filter = document.getElementById("myInput").value.toUpperCase()
 	var cards = document.getElementsByClassName("card");
 	for (var i = 0; i<cards.length; i++ ) {
 		var card = cards[i];
 		if (card.id.indexOf(filter) == 	-1   ){
 		 	card.classList.add("collapse");
		}	else { 
			card.classList.remove("collapse");
		}
 	}
 }