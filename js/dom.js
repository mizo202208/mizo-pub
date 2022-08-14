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

