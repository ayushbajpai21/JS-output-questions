let str = "madam";

let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {

    let lastIndex = str.length - 1 - i;

    if (str[i] !== str[lastIndex]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome);



//second largest element

let arr=[1,2,15,61];
let max=arr[0];
let secondmax=0
for(let i=1;i<arr.length;i++){
    if(arr[i]>max){
        secondmax=max
        max=arr[i];
    }
    else if(arr[i]!=max && arr[i]>secondmax){
        secondmax=arr[i]
    }
}
console.log(secondmax)