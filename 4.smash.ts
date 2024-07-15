export function smash (words: string[]): string {
  let result:string = "";
  words.map((el,i) => {
    result += el
    if(i != words.length - 1) result += " "
  })
  return result
  // return words.join(" ");
};

console.log(smash(["this", "is", "a", "really", "long", "sentence"]))