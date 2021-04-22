//インデックス 0 は node へのパス
//インデックス 1 は 実行 JavaScript のパス
//インデックス 2 以降にコマンド引数が与えられる
//process.argvでコマンドライン引数を受け取ることができる
const args1 = process.argv[2];
const args2 = process.argv[3];

console.log(`${(args1 / args2) * 100}%`);