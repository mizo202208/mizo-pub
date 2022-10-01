console.log ("読み込みました");

// to-addressbtnというidを持つHTML要素を取得し、定数に代入する
const toAddressbtn = document.getElementById('to-addressbtn');

// HTML要素がクリックされたされたときにイベント処理を実行する
toAddressbtn.addEventListener('click', () => {

  //テキストボックスに入力された文字列を取得する
  const text = document.getElementById('soukin').value;

  //取得した文字列を出力する
  alert("登録アドレス" + text);
});
   
// 送金先アドレスを保存
  function save () {
  const sokinad = document.getElementById('soukin').value;
  chrome.storage.local.set ({
    "address":sokinad
  },function (){
    alert("登録完了")
  })
}

// 送金先アドレスを表示
  function load () {
  chrome.storage.local.get(["address"],function(test) {
    const address = test.address;
    document.getElementById("soukin").value = address;
    })
}

// toknset1というidを持つHTML要素を取得し、定数に代入する
const toknSet1 = document.getElementById('toknset1')

// HTML要素がクリックされたされたときにイベント処理を実行する
toknSet1.addEventListener('click', () => {
  //テキストボックスに入力された文字列を取得する
  const tokn1 = document.getElementById('tokn1').value;

  //取得した文字列を出力する
  console.log(tokn1);
});

// トークン１を保存
function save () {
  const tokun1 = document.getElementById('tokn1').value;
  chrome.storage.local.set ({
    "tokn01":tokun1
  },function (){
    alert("トークン１登録完了")
  })

}

// トークン１を表示
function load () {
  chrome.storage.local.get(["tokn01"],function(test) {
    const tokun1 = test.tokun1;
    document.getElementById("tokn1").value = tokun1;
    })
}
document.getElementById('toknset1').addEventListener("click",save)
document.getElementById('to-addressbtn').addEventListener("click",save)
document.addEventListener('DOMContentLoaded', load);



