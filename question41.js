// find duplicate number in an array 

let arr=[1,1,1,2,3,3,4,4,4]

let dup=arr.filter((item,index)=>{
    return arr.indexOf(item)!==index
})

console.log([...new Set(dup)])