const str = 'hello sir how are you what are you doing right now ';
const vowels = ['a','e','i','o','u'];

function countvowel(data){
   let count = 0;
    data.toLowerCase().split('').forEach((ch)=>{
       vowels.includes(ch) && count++;
    })

   return count;

}


const countvowels = countvowel(str)
console.log(countvowels)