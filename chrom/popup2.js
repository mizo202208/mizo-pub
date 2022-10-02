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
    const tokun01 = test.tokun01;
    console.log(test);
    console.log(tokun01);
    document.getElementById('tokn1').textContent = tokun01;
  })
}

// トークン２を表示
function load () {
  chrome.storage.local.get(["tokn02"],function(test) {
    const tokn02 = test.tokn02;
    console.log(test);
    console.log(tokn02);
    document.getElementById('tokn2').textContent = tokn02;
  })
}

// トークン３を表示
function load () {
  chrome.storage.local.get(["tokn03"],function(test) {
    const tokn03 = test.tokn03;
    console.log(test);
    console.log(tokn03);
    document.getElementById('tokn3').textContent = tokn03;
  })
}

document.addEventListener('DOMContentLoaded', load);



