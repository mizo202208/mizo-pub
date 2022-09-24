console.log ("読み込みました");

chrome.storage.local.set({key: "0x003B45a7638533f3A090Ba1FCa940cAb7d79cEa3"}, function () {
  
});

chrome.storage.local.get(['key'], function (result) {
  console.log('Value currently is ' + result.key);
});



