console.log ("読み込みました");

chrome.storage.local.set({key: "0x003B45a7638533f3A090Ba1FCa940cAb7d79cEa3"}, function () {
  
});

chrome.storage.local.get(['key'], function (result) {
  console.log('送金先アドレス ' + result.key);
});

// 新しくli要素を作成し、定数に代入する
const li = document.createElement('li');

// 作成したli要素にテキストを追加する
li.innerHTML = '<a href="#">JavaScriptで新しく作成したトークン３</a>';

// ul要素の末尾にli要素を追加する
document.querySelector('ul').appendChild(li);

// output-btnというidをもつHTML要素を取得し、定数に代入する
const btn = document.getElementById('output-btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {
  console.log('クリックされました！');
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
  
  // li要素を新しく作成する
  const childList = document.createElement('li');
  
  // 作成したli要素に「これは要素です」というテキストを追加する
  childList.textContent = 'トークン';
  //　作成したli要素をul要素の子要素として末尾に追加する
  parentList.appendChild(childList);


});

// to-addressbtnというidを持つHTML要素を取得し、定数に代入する
const toAddressbtn = document.getElementById('to-addressbtn')

// HTML要素がクリックされたされたときにイベント処理を実行する
toAddressbtn.addEventListener('click', () => {
  //テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;

  //取得した文字列を出力する
  console.log(text);
});
    


