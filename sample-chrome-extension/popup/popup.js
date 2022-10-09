console.log('----- popup.js is read -----');

function save() {
    // ボタンから値を取得
    const value = document.getElementById('storage_input').value;

    if (!value) {
        // value (入力した値) が何もなかった場合
        alert('保存する場合は、何か値を入力してください。');
    } else {
        // 取得した値を "test_value" というキー名で保存
        chrome.storage.local.set({'test_value': value}, function () {
            alert('値を保存しました。');
        });
    }
}

function get() {
    // "test_value" というキー名で、保存されている値を取得
    chrome.storage.local.get(['test_value'], function (items) {
        // 値を取得後の処理

        if (items.test_value) {
            // test_value を変数にセット
            const value = items.test_value;

            // 表示用のタグを id で指定し、取得した内容を表示する
            document.getElementById('storage_output').value = value;
        } else {
            alert('"test_value" には、まだ何も保存されていません。');
        }
    });
}

function clear() {
    chrome.storage.local.clear(function () {
        alert('保存されている値を全て削除しました。');

        // 画面に表示されている値も空にする
        document.getElementById('storage_output').value = '';
    });
}

function load() {
    console.log('----- popup.html が読み込まれました -----');
}

// id "save_btn" のボタンが押されたかを監視する
document.getElementById('save_btn').addEventListener('click',save);
// id "get_btn" のボタンが押されたかを監視する
document.getElementById('get_btn').addEventListener('click',get);
// id "clear_btn" のボタンが押されたかを監視する
document.getElementById('clear_btn').addEventListener('click',clear);

// 画面が読み込まれたかを監視する
document.addEventListener('DOMContentLoaded', load);
