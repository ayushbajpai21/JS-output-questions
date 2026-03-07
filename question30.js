// remove duplicate element in an array 
let arr=[1,1,2,2,3,3];
let obj={};
let unique=[];
for(let i= 0 ; i < arr.length ; i++){
    if(!obj[arr[i]]){
        obj[arr[i]]=true;
        unique.push(arr[i]);
    }
}
console.log(unique)