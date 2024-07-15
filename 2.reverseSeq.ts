export const reverseSeq = (n: number): number[] => {
  // const result:number[] = [];
  // for (let index = n; index >= 1; index--) {
  //   result.push(index);
  // }
  // return result;

  // return [...Array(n)].map((el, i) => i+1).reverse();
  return [...Array(n)].map((el, i) => n-i)
};


console.log(reverseSeq(5))