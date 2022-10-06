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




// トークンを表示
function load () {
  chrome.storage.local.get(["address","tokn01","tokn02","tokn03"],function(test) {
    const address = test.address;
    const tokn1 = test.tokn01;
    const tokn2 = test.tokn02;
    const tokn3 = test.tokn03;
    console.log(test);
    
    document.getElementById('soukin').textContent = address;
    document.getElementById('tokn1').textContent = tokn1;
    document.getElementById('tokn2').textContent = tokn2;
    document.getElementById('tokn3').textContent = tokn3;
  })
}

document.addEventListener('DOMContentLoaded', load);



