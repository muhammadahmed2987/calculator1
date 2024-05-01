function clicked(e){
    var getInp = document.getElementById('inp').value += e
}

function equal(){
    var getInp = document.getElementById("inp")
    getInp.value = eval(getInp.value) 
}
function cleared(){
    document.getElementById("inp").value = ''
}
function clearAll() {
    a = document.getElementById("inp").value
    b = a.slice(0 , -1)
    document.getElementById("inp").value = b
}


//    ....stop watch rlated methods...
// var num = 0
// var interval;

// interval = setInterval(function(){
//        num++
//        console.log (num)

// } , 1000)

// setTimeout(function(){
//     clearInterval(interval)
// } , 5000)


