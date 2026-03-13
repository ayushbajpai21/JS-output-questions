const str="hello ayush";
const result = str.split(" ").map(w => w[0].toUpperCase()+w.slice(1)).join(" ");
console.log(result)