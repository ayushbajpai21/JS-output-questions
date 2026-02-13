function checkAge(data){
    if(data.age === 18){
        console.log('you are an adult');
    }
    else{
        console.log('not an adult');
    }
}

checkAge({age:18});
