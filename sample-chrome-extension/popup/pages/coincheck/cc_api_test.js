/* 実演 DEMO */
// ティッカー情報の変数宣言, および初期値を取得
let selectedTicker = document.getElementById('ticker_select').value;

// ティッカー情報の変数を変更する処理
const changeTicker = (event) => {
    selectedTicker = event.target.value;
}
// ティッカー (通貨ペア) を表示用に変換する処理
const tickerView = (ticker_code) => {
    switch (ticker_code) {
        case 'btc_jpy':
            return 'BTC/JPY';
            break;
        case 'etc_jpy':
            return 'ETC/JPY';
            break;
        case 'mona_jpy':
            return 'MONA/JPY';
            break;
        case 'plt_jpy':
            return 'PLT/JPY';
            break;
        case 'lsk_jpy':
            return 'LSK/JPY';
            break;
        case 'omg_jpy':
            return 'OMG/JPY';
            break;
        default:
            return '';
            break;
    }
}

// ティッカー情報を取得するサンプル処理
const getTickerInfo = () => {
    if (selectedTicker) {
        let httpRequest = new XMLHttpRequest();

        let url = 'https://coincheck.com'; // URL宛先
        let endpoint = '/api/ticker'; // エンドポイント
        let query = `?pair=${selectedTicker}`; // 通貨ペア (ティッカーコード)
    
        httpRequest.open('GET', url + endpoint + query, true); // 宛先の設定
        httpRequest.setRequestHeader('Content-Type', 'application/json'); // JSON形式のデータ通信を指定
    
        // 通信成功時の処理
        httpRequest.onload = () => {
            console.log('::: GET response Success');
            console.log('HTTPステータス: ', httpRequest.status);
            console.log('response: ', JSON.parse(httpRequest.response));
    
            // 結果表示に値をセット
            const res = JSON.parse(httpRequest.response);
            document.getElementById('ticker').value = tickerView(selectedTicker);
            document.getElementById('last').value = res.last;
            document.getElementById('bid').value = res.bid;
            document.getElementById('ask').value = res.ask;
            document.getElementById('high').value = res.high;
            document.getElementById('low').value = res.low;
            document.getElementById('volume').value = res.volume;
        }

        // 通信失敗時の処理
        httpRequest.onerror = () => {
            alert('[エラー] 通信に失敗しました。');
        }

        // API 通信実行
        httpRequest.send();
    }
    else {
        alert('ティッカーシンボルが選択されていません。')
    }
}

// Ajax POST通信
const testPostRequest = () => {
    console.log('===== Ajax POST通信 実行 =====');

    let httpRequest = new XMLHttpRequest();
    let url = 'https://httpbin.org';
    let endpoint = '/post';

    httpRequest.open('POST', url + endpoint, true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.onload = () => {
        console.log('::: POST response Success');
        console.log('HTTPステータス: ', httpRequest.status);
        console.log('response: ', JSON.parse(httpRequest.response));
    }
    httpRequest.onerror = () => {
        console.log('::: POST response Error');
    }

    const myObj = {
        name: 'Skip',
        age: 2,
        favoriteFood: 'Steak'
      };
      
    const myObjStr = JSON.stringify(myObj);
    httpRequest.send(myObjStr);

    // 結果表示に値をセット
    responseView.value = '通信結果はこちら';
}

// 取得ボタンを監視する
document.getElementById('get_ticker').addEventListener('click',getTickerInfo);
// セレクトボックスの変更を監視する
document.getElementById('ticker_select').addEventListener('change',changeTicker);
selectedTicker