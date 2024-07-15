//Beginer
// export function grow(arr: number[]): number {
//   let result:number = arr[0]
//   for (let index = 1; index < arr.length; index++) {
//     result *= arr[index];
    
//   }
//   return result
// }

//Advance
export function grow(arr: number[]): number {
  // const result:number = arr.reduce((prev:number, curr:number) => prev*curr, 1)
  return arr.reduce((prev:number, curr:number) => prev*curr,2)
}

const grow2 = (arr:number[]): number => arr.reduce((prev:number, curr:number) => prev*curr)

console.log(grow([1,2,3,4]))
console.log(grow2([1,2,3,4]))