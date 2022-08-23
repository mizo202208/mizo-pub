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