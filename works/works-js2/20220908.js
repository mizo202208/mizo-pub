<<<<<<< HEAD
//課題０５ up-btnというidを持つHTML要素を取得し、定数に代入する
const upBtn = document.getElementById('up-btn');

//画面がスクロールされたときにイベント処理を実行する
window.addEventListener('scroll', () => {
  //画面のスクロール量をpx（ピクセル）数で取得する
  const scrollvalue = document.scrollingElement.scrollTop;

  //画面がスクロールされると「UP」ボタンを表示する
  if (scrollvalue >= 1) {
    upBtn.style.display = 'inline';
  }
  //画面のスクロール量がそれ以外（1px未満）であれば、「UP」ボタンを非表示にする
  else {
    upBtn.style.display = 'none';
  }
  
})


=======
//課題０５
>>>>>>> 285c46f593ac52d577132bfa99a6d1d45a7f2c2a
