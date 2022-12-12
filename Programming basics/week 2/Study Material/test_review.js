//1. print 1-255

function print1to255(){
    for (let x = 0; x <= 255; x++) {
        console.log(x);
    }
}
print1to255();



//2. print odds 1-255

function printodds1to255() {
    var sum = 0;
    for (let x = 0; x <= 255; x++) {
        if (x % 2 === 1){
            console.log (x);
    }   
  }
}
printodds1to255();


//3 print ints and sums 0-255

function printintandsumto255(){
    let sum = 0;
    for (let i = 0; i < 255; i++) {
        console.log(i);
        sum += i;    
    }
    console.log(sum);
}
printintandsumto255();

//4. iterate and print array

function printarrayvals(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        
    }
}
printarrayvals([3,4,5,6,7,7,8]);


// 5. print max of array

function printmaxofarray(arr){
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}
printmaxofarray([3,4,5,457,7,8]);


// 6. get and print average

function printAverageofArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var avg = sum / arr.length;
    console.log(avg);
}
printAverageofArray([100,200]);

// 7. function returnOddofArray1to255(){
    var arr = []
    for (i = i; i < 256; i++){
        if (i % 2 ===1){
            arr.push[i]}
    }
returnOddofArray1to255()

//8. square values
function squarthevalues(arr){
    for(i = 0; i < arr.length; i++){
        arr[i]= arr[i] * arr[i]
        console.log(arr[i])
    }
}
squarthevalues([,2,4,6,8]);

//9. greater than y
function greaterthanY(arr, Y){
    var count = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] > Y){
        count++
    }
    console.log(Y)
}
}
greaterthanY()