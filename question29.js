// find the second largest number in an array
let arr=[10,20,30,40];
let max= -Infinity;
let secMax = -Infinity;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        secMax=max;
        max=arr[i];
    }
    else if(max!==arr[i]&& arr[i]>secMax){
        secMax=arr[i];
    }
}
console.log(secMax)