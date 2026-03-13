// count occureence of character in string 
function charfreq(str){
   let freq={}
   for(let ch of str){
    freq[ch]=(freq[ch]||0)+1
   }
   return freq
}
console.log(charfreq("banana"))