# 九九表


**九九表を表示してみよう**

出力コマンド
```
1 2 3 4 5 6 7 8 9
2 4 6 8 10 12 14 16 18
3 6 9 12 15 18 21 24 27
4 8 12 16 20 24 28 32 36
5 10 15 20 25 30 35 40 45
6 12 18 24 30 36 42 48 54
7 14 21 28 35 42 49 56 63
8 16 24 32 40 48 56 64 72
9 18 27 36 45 54 63 72 81
```

const array_a = [1,2,3,4,5,6,7,8,9];
let array_b = [1,2,3,4,5,6,7,8,9];

const array_99 = [];

for(var i = 0; i < array_a.length; i++ ){
    var array_dan =[];
    for(var j = 0; j < array_b.length; j++) {
        array_dan.push(array_a[i] * array_b[j]);
    }
    array_99.push(array_dan);
}
console.table(array_99);