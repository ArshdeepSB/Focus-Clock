console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);
 
function buttonClicked(tab) {
  var msg = {
    message: "user clicked!"
  }
  chrome.tabs.sendMessage(tab.id, msg);

//var audio = new Audio('sketch/lofiMusic.mp3');
//audio.play();
}