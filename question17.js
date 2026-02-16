// write a function that uses closures to create as a counter 
function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count)
    }
}

var ans=counter();
ans();
ans();
ans();
ans();
ans();