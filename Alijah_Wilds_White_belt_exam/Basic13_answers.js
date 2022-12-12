//1. print 1-255

function print1to255(){
    for (let x = 0; x <= 255; x++) {
        console.log(x);
    }
}
print1to255();


//2. print odds 1-255
function PrintOdds1to255(){
    for(var i = 0; i < 256; i++){
        if(i % 2 === 1){
            console.log(i)
        }
    }
}
PrintOdds1to255();

//3. print ints and sums 0-255
function PrintIntandSums(){
    var sum = 0;
    for(var i = 0; i < 255; i++){
        console.log(i);
        sum = sum + i
    }
    console.log(sum)
}
PrintIntandSums();

//4.iterate and print array

function IterateandPrintArray(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
IterateandPrintArray([3,4,5,6,7,7,8]);

//5. Find and Print Max

function PrintMax(arr){
    var max = [0]
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max)
}
PrintMax([1,2,3,55,6,7,8]);

//6. get and print average

function PrintAverage(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum / arr.length);
}
PrintAverage([100,200]);

//7.Array with Odds
// return odds 1-255

function ReturnOdds (){
    var arr = []
    for (i = 0; i < 256; i++){
    if (i % 2 ===1){
        arr.push(i)
    }
}
return arr
}
console.log(ReturnOdds())

//8. Square the Values

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
    var Y = 3
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > Y){
        count++
    }
}
console.log(count)
}
greaterthanY([2,3,5,9]);

//10. Zero out Negative numbers

function ZeroNegatives(arr){
    
    for(var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = [i] * 0;
        }
    }
    console.log (arr);
}
ZeroNegatives([-2,-4,5,6,-7]);