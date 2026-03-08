// merge 2 arrays and return a sorted array 
let arr1=[1,0,5];
let arr2=[3,4,6];

let mergearr=[...arr1 , ...arr2];

let sorted = mergearr.sort((a,b)=>a-b);

console.log(sorted);