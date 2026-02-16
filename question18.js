// implement a function that limits how many times another function can be called(closures + hof)

function fnlimiter(fn,limit){
    let total =0;
    return function(){
        if(total<limit){
            total++;
            fn();
        }
        else{
            console.log('limit reach')
        }
    }
}

var limitans = fnlimiter(function(){
    console.log('hello')
},3);
limitans();
limitans();
limitans();
limitans();