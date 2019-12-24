function factWithoutRecursion(num) {
    var total = 1;
    for(var i = num;i>=1;i--){
        total = total*i;
        console.log(total);
    }
}

factWithoutRecursion(8);