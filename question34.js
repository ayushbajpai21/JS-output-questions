// reverse an array without using reverse 
let arr= [1,2,3,4];
let left = 0;
let right = arr.length-1;
while(left<right){
    temp=arr[left]
    arr[left]=arr[right]
    arr[right]=temp
    left++;
    right--;
}
console.log(arr)
