// 結果表示エリアの要素を取得しておく
let responseView = document.getElementById('ajax_response');

// Ajax GET通信
const testGetRequest = () => {
    console.log('===== Ajax GET通信 実行 =====');

    // リクエスト用変数の作成
    let httpRequest = new XMLHttpRequest();

    let url = 'https://httpbin.org'; // リクエスト先の基本URL
    let endpoint = '/get'; // リクエスト先のエンドポイント
    let query = '?xxx=xxx'; // 何かクエリを追加する場合は使用する

    // リクエストの初期化 (通信の種類と、宛先をセットする)
    httpRequest.open( 'GET', (url + endpoint + query) );

    // JSON形式のデータをやり取りする定義 (これは必須ではない)
    httpRequest.setRequestHeader('Content-Type', 'application/json');

    // 通信成功時の処理
    httpRequest.onload = () => {
        console.log('::: GET response Success');
        console.log('HTTPステータス: ', httpRequest.status);

        // 戻ってきた値を変数にセット
        const resData = httpRequest.response;

        // 戻ってきた値は JSON形式ではなく文字列なので、JSON.parse() でJSON形式にする
        const resDataJson = JSON.parse(resData);
        console.log('response: ', resDataJson); 

        // 画面に結果を表示
        if (resDataJson.data) {
            responseView.value = resDataJson.data;
        } else {
            responseView.value = resDataJson.url + 'への通信は成功しましたが、返却できるデータがありませんでした。'
        }
    }
    // 通信失敗時の処理
    httpRequest.onerror = () => {
        console.log('::: GET response Error');
    }

    // GET リクエスト送信を実行
    httpRequest.send();
}

// Ajax POST通信
const testPostRequest = () => {
    console.log('===== Ajax POST通信 実行 =====');

    let httpRequest = new XMLHttpRequest();
    let url = 'https://httpbin.org';
    let endpoint = '/post';

    httpRequest.open('POST', url + endpoint, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');

    // 通信成功時の処理
    httpRequest.onload = () => {
        console.log('::: POST response Success');
        console.log('HTTPステータス: ', httpRequest.status);

        // 戻ってきた値を変数にセット
        const resData = httpRequest.response;

        // 戻ってきた値は JSON形式ではなく文字列なので、JSON.parse() でJSON形式にする
        const resDataJson = JSON.parse(resData);
        console.log('response: ', resDataJson); 

        // 画面に結果を表示
        if (resDataJson.data) {
            responseView.value = resDataJson.data;
        } else {
            responseView.value = resDataJson.url + 'への通信は成功しましたが、返却できるデータがありませんでした。'
        }
    }
    // 通信失敗時の処理
    httpRequest.onerror = () => {
        console.log('::: POST response Error');
    }

    // 送信する body 内容を作成する (以下はサンプル)
    const myObj = {
        name: 'Skip',
        age: 2,
        favoriteFood: 'Steak'
    };
    
    // 送信する値は、JSON 文字列でないと受付ないので、JSON.stringify() で通信可能な JSON 文字列に変換する
    const myObjStr = JSON.stringify(myObj);
    // POST リクエスト送信を実行
    httpRequest.send(myObjStr);
}

// 画面読込時の処理
const load = () => {
    console.log('===== 画面が読み込まれました =====');
    responseView.placeholder = 'ここに通信結果が表示されます。';
}

// id でボタンを監視して、クリックされたら第二引数の処理を実行
document.getElementById('test_get_btn').addEventListener('click',testGetRequest);
document.getElementById('test_post_btn').addEventListener('click',testPostRequest);
// 画面表示を監視して、画面が読み込まれたら load 関数を実行
document.addEventListener('DOMContentLoaded', load);