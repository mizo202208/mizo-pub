console.log ("読み込みました");

// to-addressbtnというidを持つHTML要素を取得し、定数に代入する
const toAddressbtn = document.getElementById('to-addressbtn');

// HTML要素がクリックされたされたときにイベント処理を実行する
toAddressbtn.addEventListener('click', () => {

  //テキストボックスに入力された文字列を取得する
  const sokinad = document.getElementById('soukin').value;

  //取得した文字列を出力する
  alert("登録アドレス" + sokinad);
});
   
// 送金先アドレスを保存
  function save () {
  const sokinad = document.getElementById('soukin').value;
  chrome.storage.local.set ({
    "address":sokinad
  },function (){
    alert("登録完了" + sokinad)
  })
}

// 送金先アドレスを表示
  function load () {
  chrome.storage.local.get(["address"],function(test) {
    const address = test.address;
    document.getElementById("soukin"). textContent= address;
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

// toknset2というidを持つHTML要素を取得し、定数に代入する
const toknSet2 = document.getElementById('toknset2')

// HTML要素がクリックされたされたときにイベント処理を実行する
toknSet2.addEventListener('click', () => {
  //テキストボックスに入力された文字列を取得する
  const tokn2 = document.getElementById('tokn2').value;

  //取得した文字列を出力する
  console.log(tokn2);
});

// トークン2を保存
function save () {
  const tokun2 = document.getElementById('tokn2').value;
  chrome.storage.local.set ({
    "tokn02":tokun2
  },function (){
    alert("トークン2登録完了")
  })

}

// トークン2を表示
function load () {
  chrome.storage.local.get(["tokn02"],function(test) {
    const tokun2 = test.tokun2;
    document.getElementById("tokn2").value = tokun2;
    })
}


// toknset3というidを持つHTML要素を取得し、定数に代入する
const toknSet3 = document.getElementById('toknset3')

// HTML要素がクリックされたされたときにイベント処理を実行する
toknSet3.addEventListener('click', () => {
  //テキストボックスに入力された文字列を取得する
  const tokn3 = document.getElementById('tokn3').value;

  //取得した文字列を出力する
  console.log(tokn3);
});

// トークン3を保存
function save () {
  const tokun3 = document.getElementById('tokn3').value;
  chrome.storage.local.set ({
    "tokn03":tokun3
  },function (){
    alert("トークン3登録完了")
  })

}

// トークン3を表示
function load () {
  chrome.storage.local.get(["tokn03"],function(test) {
    const tokun3 = test.tokun3;
    document.getElementById("tokn3").value = tokun3;
    })
}





document.getElementById('toknset3').addEventListener("click",save)
document.getElementById('toknset2').addEventListener("click",save)
document.getElementById('toknset1').addEventListener("click",save)
document.getElementById('to-addressbtn').addEventListener("click",save)
document.addEventListener('DOMContentLoaded', load);



