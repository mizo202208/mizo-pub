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
  chrome.storage.local.get(["tokn01"])
}

document.addEventListener('DOMContentLoaded', load);



