// export function hero(bullets: number, dragons: number): boolean {
//   if (bullets / 2 >= dragons) {
//     return true;
//   }
//   return false
// }

const hero = (bullets:number, dragons:number):boolean => bullets / 2 >= dragons;

console.log(hero(10,5))