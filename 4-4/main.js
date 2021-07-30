var arr = [0,1,2,3,4,5,6,7,8,9];
var a = arr.length;
 
while (a) {
    var j = Math.floor( Math.random() * a );
    var t = arr[--a];
    arr[a] = arr[j];
    arr[j] = t;
}
arr.forEach( function( value ) {console.log( value )} );