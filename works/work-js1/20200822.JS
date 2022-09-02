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

// add-btnというidをもつHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');

// 表示・非表示
const Box = document.getElementById('Box');





function changeElement(el) {
    if (el.style.display == '') {
        el.style.display = 'none';
    } else {
        el.style.display = '';
    }
}

// ボタンクリック時に実行
addBtn.addEventListener('click', ()=> {
    changeElement(Box);
});

