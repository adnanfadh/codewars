// function countBy(x, n) {
  // let z = [];

  // for (let index = 1; index < n; index++) {
  //   z.push(index * x)  
  // }

  // return z;
//   return [...Array(n)].map((el,i) => (i + 1) * x)
// }

const countBy = (x, n) => [...Array(n)].map((_, i) => (i+1) * x) 

console.log(countBy(1,10))