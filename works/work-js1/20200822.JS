// 練習課題１―１コンソールにメッセージを表示
console.log(`練習課題１－１`);

// 練習課題１-２alart
alert(`練習課題１－２`);

// 練習課題１―３　OK　キャンセル
var result = confirm(`練習課題１－３`);
if( result ) {
    console.log(`ok押しました`);
}
else {
    console.log(`キャンセル押しました`)
}
// 練習課題２　ok-buttonというidを持つHTML要素を取得し、定数を代入する
const okButton= document.getElementById(`ok-button`);

// OKボタンがクリックされたときにイベント処理を実行する
okButton.addEventListener(`click`, () => {
    alert(`クリックされました`);
});

// 練習課題３
const num1=22
const text="練習課題３"
console.log(num1);
console.log(text);
console.log(num1+text);

// 1～10の数値の配列型の変数を作成
var array = [10] ;
for (let i = 1; i <= 10; i += 1) {
    console.log(i);
}

// 偶数
for (let i = 1; i <= 10; i += 1) {
if (i % 2 === 0 ) {
    console.log(i);
}}

//各種ボタン要素を取得しておく
var dialog = document.getElementById('daialog');
var btn = document.getElementById('btn');
var add = document.getElementById('add');
var unadd = document.getElementById('unadd');


//ボタンがクリックされるとダイアログを表示する
btn.addEventListener('click', function() {
    dialog.style.display = 'block';
    this.style.display = 'none';
})


//追加ボタンがクリックされたら背景色を表示する
add.addEventListener('click', function() {
    bBox.style.display = 'block';    
})


//削除ボタンがクリックされたら背景色を非表示
unadd.addEventListener('click', function() {
    bBox.style.display = 'none';
})


