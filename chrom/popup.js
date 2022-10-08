console.log ("読み込みました");

// toknsetというidを持つHTML要素を取得し、定数に代入する
const toAddressbtn = document.getElementById('toknset');

// HTML要素がクリックされたされたときにイベント処理を実行する
toAddressbtn.addEventListener('click', () => {

  //テキストボックスに入力された文字列を取得する
  const sokinad = document.getElementById('soukin').value;

});
   
// 送金先アドレスを保存
  function save1 () {
  const sokinad = document.getElementById('soukin').value;
  chrome.storage.local.set ({
    "address":sokinad
  },function (){
    alert("登録アドレス" + sokinad)
  })
}

// 送金先アドレスを表示
  function load1 () {
  chrome.storage.local.get(["address"],function(test1) {
    const address = test1.address;
    console.log(test1);
    document.getElementById("soukin"). value= address;
    })
}


// トークンを保存
function save () {
  const tokn1 = document.getElementById('tokn1').value;
  const tokn2 = document.getElementById('tokn2').value;
  const tokn3 = document.getElementById('tokn3').value;
  chrome.storage.local.set ({
    "tokn01":tokn1,"tokn02": tokn2,"tokn03":tokn3
  },function (){
    alert("トークン登録完了")
  })

}

// トークンを表示
function load () {
  chrome.storage.local.get(["tokn01","tokn02","tokn03"],function(test) {
    const tokn1 = test.tokn01;
    const tokn2 = test.tokn02;
    const tokn3 = test.tokn03;
    console.log(test);
    document.getElementById('tokn1'). value = tokn1;
    document.getElementById('tokn2'). value = tokn2;
    document.getElementById('tokn3'). value = tokn3;
    if (tokn1,tokn2,tokn3) {
      document.getElementById('tokn1'). value = tokn1;
      document.getElementById('tokn2'). value = tokn2;
      document.getElementById('tokn3'). value = tokn3;
    }
  })
}

const ResponseView = document.getElementById('api_test_hyouji');

// Ajax GET通信
const testGetRequest = () => {


//const testGetRequest = {} => {
  //console.log('========= Ajax GET通信　実行　＝＝＝＝')
//}


  // リクエスト用変数の作成
  let httpRequest = new XMLHttpRequest ();
  const url = 'https://httpbin.org';
  const endpoint = '/get';

  // リクエスト先の設定
  httpRequest.open('GET', url + endpoint);

  // もしレスポンスが返ってきたら、やること
    httpRequest.onload = () => {
  // レスポンス時の処理
    console.log('通信成功！');
    ResponseView.value = '成功';
    
    }

    // 通信エラーのときに実行される処理
    httpRequest.onerror = () => {
      console.log('通信失敗');
    }
    // GET　リクエスト通信の実行
    httpRequest.send();
  }

  // Ajax post通信
  const testGetRequest1 = () => {
    console.log('ajax post通信実行');

    const httpRequest = new XMLHttpRequest ();
    const url = "https://httpbin.org";
    const endpoint = "/post";

    httpRequest.open('POST', url + endpoint);

//httpRequest.setRequestHeader('Content-Type', 'application/json');

    httpRequest.onload = () => {
      console.log('::: POST response Success');
      console.log('HTTPステータス: ', httpRequest.status);
      console.log('response: ', JSON.parse(httpRequest.respnse));

    httpRequest.onerror = () => {
      console.log('::: POST response Error');
    }
    }

    // bodyデータの生成
    //const body = { aaa: 123, bbb: 'テスト'};
    //const bodyJsonString = JSON.stringify(body);

    // POST リクエスト送信を実行
    //httpRequest.send(bodyJsonString);
  }





// JSON形式のデータをやりとりする定義
//httpRequest.setRequestHeader('Content-Type', 'application/json');
//httpRequest.onload = function() {
  //const response = JSON.parse(httpRequest.response);
  //document.getElementById('shop_name').value = response.name;
  //document.getElementById('shop_address').value = response.address;
//}





document.getElementById('api_tst_btn').addEventListener("click",testGetRequest)
document.getElementById('api_tst_btn').addEventListener("click",testGetRequest1)
document.getElementById('toknset').addEventListener("click",save1)
document.getElementById('toknset').addEventListener("click",save)
document.addEventListener('DOMContentLoaded', load1);
document.addEventListener('DOMContentLoaded', load);




