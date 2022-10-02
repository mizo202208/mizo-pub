console.log ("読み込みました");
   
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
    console.log(test);
    console.log(address);
    document.getElementById("soukin").textContent = address;
    })
}

// トークン１を表示
function load () {
  chrome.storage.local.get(["tokn01"],function(test) {
    const tokn01 = test.tokn01;
    console.log(test);
    console.log(tokn01);
    document.getElementById('tokn1').textContent = tokn01;
  })
}

// トークン２を表示
function load () {
  chrome.storage.local.get(["tokn02"],function(test) {
    const tokn2 = test.tokn2;
    console.log(test);
    console.log(tokn2);
    document.getElementById('tokn2').textContent = tokn2;
  })
}

// トークン３を表示
function load () {
  chrome.storage.local.get(["tokn03"],function(test) {
    const tokn3 = test.tokn3;
    console.log(test);
    console.log(tokn3);
    document.getElementById('tokn3').textContent = tokn3;
  })
}

document.addEventListener('DOMContentLoaded', load);



