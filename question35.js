// async function foo() {
//     return 'hello world'
// }
// const result = foo();
// console.log(result)


 async function foo() {
   return 'hello world'
 }

async function test(){
  const result = await foo();
  console.log(result);
}

test();