//(function (){
//    console.log(5);
//})();
//
//let iife = function () {
//    console.log("invoked!");
//}();

//(function (arr) {
//    let sum = 0;
//    for (let i of arr) {
//        sum += i;
//    }
//    console.log(sum);
//})([10, 20, 30]);

//let f = (function () {
//    let counter = 0;
//    return function () {
//        console.log(++counter);
//    }
//})(5);
//
//f();
//f();
//f();
//f();
//f();
//f();
//f();

//let f = (function () {
//    let counter = 0;
//    console.log("start iife");
//
//    return function () {
//        ++counter;
//        console.log("next iife");
//        console.log(counter);
//    }
//})();
//
//f();
//f();
//f();
//f();
//f();
//f();
//f();
//
//let obj = {
//    name: "pesho",
//    print: function () {
//        console.log(this);
//    }
//};

function f(){
    console.log(this);
}

f();