// find sum of all elements
// using reduce method  
let arr=[1,2,3]
let ans = arr.reduce((acc,cur)=>{
   return acc+cur
},0)

// using for of 
let arr1=[1,2,3]
let sum=0;
for(let num of arr){
  
    sum=sum+num;
}
console.log(sum)