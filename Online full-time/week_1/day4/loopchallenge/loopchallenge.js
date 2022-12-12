//1. print odd 1-20
function printodd(){
for(var i = 0; i < 21; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
}
printodd();

//2.Decrease Multiple of 3 down from 100
function Multof3(){
    for(var i = 100; i > 0; i--)
        if(i % 3 === 0){
            console.log(i);
        }
}
Multof3();

//3. sigma sum of 1-100
var sum = 0;
function sigma(){
    for(var i = 1; i < 101; i++){
            sum += i;
        }
        console.log(sum);
    }
sigma();

//4. factorial
var product = 1;
function factorial(){
    for(var i=1; i<13; i++) {
    product *= i;
}
console.log(product);
}
factorial();