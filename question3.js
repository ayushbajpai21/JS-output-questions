const income ={
    skills : 188 , 
    monthly (){
        return this.skills * 108 ;
    },
    yearly : ()=> 888 * this.skills,
};
console.log(income.monthly())
console.log(income.yearly())