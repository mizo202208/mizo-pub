// head要素を取得し、中身を出力する
console.log(document.head);
// body要素を取得し、中身を出力する
console.log(document.body);

console.log(window);

// HTML要素をidで取得し、中身を出力する
console.log(document.getElementById('first-list'));

// HTML要素をclassで取得し、中身を出力する
console.log(document.getElementsByClassName('heading'));

// 複数のHTML要素を取得し、定数に代入する
const headings = document.getElementsByClassName('heading');

// 複数のHTML要素を1つずつ取得し、中身を出力する
for (let i = 0; i < headings.length; i++) {
  console.log(headings[i]);
}

// HTML要素をCSSセレクタで取得し、中身を出力する（最初の1つ）
console.log(document.querySelector('h1'));
console.log(document.querySelector('#second-heading'));
console.log(document.querySelector('.list'));

// html要素をCSSセレクタで取得し、中身を出力する（すべて）
console.log(document.querySelectorAll('.heading'));
console.log(document.querySelectorAll('li'));

// 新しくli要素を作成し。定数に代入する
const li = document.createElement('li');

//　作成しli要素にテキストを追加する
li.textContent = 'javascriptで新しく作成したリスト３';

// ul要素の末尾li要素を追加する
document.querySelector('ul').appendChild(li);

