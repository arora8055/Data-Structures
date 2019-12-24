// Two Essential parts of a recursive function
// .Base Case
// . Different Input

function countDown(num){
    if(num <= 0) {
        console.log('All Done');
        return ;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(5);