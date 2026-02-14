const str= "jai shree ram hare ram hare ram ram ram hare hare hare krishna hare krishna krishna krishna hare hare";
const obj={};
for(let x of str){
 if(obj[x]){
    obj[x] +=1;
 }else{
    obj[x]=1
 }
}
console.log(obj)