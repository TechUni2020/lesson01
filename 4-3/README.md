# エラー抽出

**ログファイルの中からエラーの内容だけを抜き出して表示する**

### ルール
最初に見つかるコロン":"からスペース＋ハイフン" -"までの間をエラーの内容とする

```
const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]
```

出力結果
```
Invalid Exception AAA
Invalid Exception BBBB
Invalid Exception CCCCC
```