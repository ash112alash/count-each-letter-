function charcountupdate(str) {
	var lng = str.length;
	document.getElementById("charcount").innerHTML = lng + ' letters';
}

var input = document.getElementById("textbox");
var button = document.getElementById("count");

function countAlphabet() {
  var sent = input.value;
  var count ;
  var length = sent.length; 
  var small = "abcdefghijklmnopqrstuvwxyz";
  var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   //Check if the letter is a
  for(var j=0; j<small.length; j++){
	  count =0; 
		for (var i = 0; i < length; i++) {
			if (sent.charAt(i) == small.charAt(j) || sent.charAt(i)== capital.charAt(j) ) {
				count++;
			}
		}  
		document.getElementById("output").innerHTML += "<br>" + capital.charAt(j) + 
		                            " : " + count;
  }  
}
