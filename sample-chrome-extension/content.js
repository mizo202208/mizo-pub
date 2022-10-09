// manifestファイルの content_scripts にあるURLと一致したら、自動で処理されるプログラムをここに記載します。
console.log('----- content.js is read -----');

alert('Yahoo のページを開きました！');

// DOM 操作で画面に要素を追加するプログラム
const testElement = document.createElement('div');
testElement.innerText = 'このメッセージは、拡張機能の content.js によって DOM 操作で追加表示されています。';
testElement.style.border = '2px solid orange'; // 枠の太さや色
testElement.style.borderRadius = '5px'; // 枠の角丸の度合い
testElement.style.backgroundColor = 'red'; // 背景色
testElement.style.color = 'white'; // 文字色
testElement.style.padding = '0.5em 1em'; // 余白 (divの内側)
testElement.style.margin = '1em'; // 余白 (divの外側)

document.body.prepend(testElement);