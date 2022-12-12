console.log("hello")

function buy(count){
    var count = document.querySelector('#purchase');

    count.innerHTML = parseInt(count.innerHTML) + 1;
}



function sortby(element){
    console.log(element.value)
    var choose = document.querySelector('#sorted');
    choose.innerHTML = element.value
}

