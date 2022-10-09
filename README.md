# mizo-pub

以下のプロジェクトが含まれています。

- works： HTML/CSS/JavaScriptの練習コード
- chrom： Chrome拡張機能の練習コード
- sample-js： JavaScriptのサンプル集 (暗号資産に関するサンプル処理を実装)
- sample-chrome-extension： Chrome拡張機能のサンプル集

### 注意
調査したところ、MetaMask を利用した暗号資産の通信処理には、必ず `window.ethereum` という値を JavaScript で使用する必要があります。

また、この `window.ethereum` は、MetaMask 拡張機能がインストールされている状態の Google Chrome ブラウザでしか使用できません。（アカウントを切り替えた場合、そのアカウントでも個別にインストールされている必要があります）

MetaMask 拡張機能がインストールされている状態で初めて、`window.ethereum` および、これを利用した MetaMask の処理にアクセスが可能です。

しかし、更に調べたところ、セキュリティ上の問題で、Chrome拡張機能内では `window.ethereum` を呼び出すことができないようです。
このため、MetaMaskを利用した送金処理などは、Chrome拡張機能ではなく、通常のWebサイト画面としてでしか利用できないため、「`sample-js`」フォルダ内に、暗号資産に関するテスト機能が入ったサンプルコードを格納します。ご参考にしてください。

※ フロンドエンドの技術だけでは使用できませんが、Chrome拡張機能と通信を行うサーバー処理まで自分で作ることができれば、Chrome拡張機能を使用したウォレット接続アプリが開発できます。しかし、そのためにはバックエンド（サーバーサイド）の技術も習得する必要があります。（Node.js (JavaScirpt), python, solidity などの言語習得）
