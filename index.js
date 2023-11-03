function receivesAFunction (function1) {
    function0();
    function1();
}

function function0(x,y) {
    return x+y;
}

function function1(x,y) {
    return x*y;
}

function returnsANamedFunction() {
    return function0;
}

(function () {
    console.log("I am anonymous!");
})

console.log(returnsANamedFunction())

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hello');
    }
}