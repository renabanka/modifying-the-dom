window.onload = function(event) {
	console.log('Hello!')
	var checkmark = "(insert checkbox here)";
	var wish = "<strong>wish i could have</strong>"
	

	//get a list of elements with a tag
	//var list = document.getElementsByTagName('li');
	var unorderedList = document.getElementsByTagName('unordered');
	var orderedList = document.getElementsByTagName('ordered');
	var n = unorderedList.length;
	var n2 = orderedList.length;
	var paragraph = document.getElementById('target-for-text');
	var content = buildParagraph("I love waffles and maple syrup");
	var name = document.getElementById("name");
	//name.innerHTML = "I am the king of all that is awesome";
	var username = prompt('What is your name?');
	name.innerHTML = username;
	paragraph.innerHTML = content;
	paragraph.innerHTML = content;
	//console.log(checkmark);
	//console.log(list);
	console.log(paragraph);
	console.log(content);
	
	for (var i = 0; i < n; i++) {
	unorderedList[i].innerHTML = unorderedList[i].innerHTML + checkmark;
	}



	for (var i = n2; i > n2; i++) {
		orderedList.innerHTML = orderedList[i].innerHTML + wish
	}

	//loop through the ordered list
	// and at the end of the innerHTML of each li
	// add <strong>wish i could have</strong>
	//loop in the reverse order

};

function buildParagraph(content) {
	var openTag = "<em><strong>";
	var closingTag = "</strong></em>";
	return openTag + content + closingTag;
}
