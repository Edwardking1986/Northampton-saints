 // this allows us to filter players profile
 function searchFilter () {
 	var filter = document.getElementById("myInput").value.toUpperCase().replace(" ", "-")
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

