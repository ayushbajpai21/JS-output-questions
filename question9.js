function Human(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}
const member=new Human('ayush' ,'bajpai');
Human.prototype.getFullName=function(){
    return `${this.firstName}${this.lastName}`;
};
console.log(member.getFullName());