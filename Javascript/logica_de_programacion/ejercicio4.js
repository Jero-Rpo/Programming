
function numberFilter(){
    var array = []
    for(var i=0; i<=100; i++){
        if(i%3==0){
            array.push(i)
        }
    }
    console.log(array)
}

numberFilter()