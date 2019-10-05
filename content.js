
console.log("Chrome extension go");


//checks for when the button is pressed.
chrome.runtime.onMessage.addListener(receiver);

function receiver(request, sender, sendResponse) {



// if the button is pressed it will turn any paragraph on screen purple

  if (request.message === "user clicked!") {

		var elts = document.getElementsByTagName('p');
		for (var i = 0; i < elts.length; i++) {
  		elts[i].style['background-color'] = '#F0C';
  }
}
}