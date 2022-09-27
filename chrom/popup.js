console.log ("読み込みました");

// to-addressbtnというidを持つHTML要素を取得し、定数に代入する
const toAddressbtn = document.getElementById('to-addressbtn');

// HTML要素がクリックされたされたときにイベント処理を実行する
toAddressbtn.addEventListener('click', () => {

  //テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value

  //取得した文字列を出力する
  alert("アドレス設定");
});
   
// 送金先アドレスを保存
  function save () {
  const sokinad = document.getElementById('soukin').value;
  chrome.storage.local.set ({
    "address":sokinad
  },function (){
    console.log("登録完了")
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
//const toknSet1 = document.getElementById('toknset1')

// HTML要素がクリックされたされたときにイベント処理を実行する
//toknSet1.addEventListener('click', () => {
  //テキストボックスに入力された文字列を取得する
  //const tokn1 = document.forms.textForm.textBox.value;

  //取得した文字列を出力する
  //console.log(tokn1);
//});


document.getElementById('to-addressbtn').addEventListener("click",save)
document.addEventListener('DOMContentLoaded', load);



