export class Kata {
  static highAndLow(numbers: string) {
    // throw new NotImplementedException() ?
    // No, wait, this is TypeScript.
    let array = numbers.split(" ").map(Number)
    let max = Math.max(...array)
    let min = Math.min(...array)
    let result = "" + max +" "+ min
    return result
  }
}

console.log(Kata.highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))