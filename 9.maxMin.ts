export const min = (list: number[]): number => Math.min(...list);

export const max = (list: number[]): number => Math.max(...list);

export const max2 = (list: number[]): number => {
  let maxValue = list[0]
  list.map((val, i) => {
    if(val > maxValue) maxValue = val
  })
  return maxValue
}

export const min2 = (list: number[]): number => {
  let maxValue = list[0]
  list.map((val, i) => {
    if(val < maxValue) maxValue = val
  })
  return maxValue
}


console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(min2([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([-52, 56, 30, 29, -54, 0, -110]))
console.log(max2([-52, 56, 30, 29, -54, 0, -110]))