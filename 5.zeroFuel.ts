export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
  // return distance / mpg <= fuelLeft
  return fuelLeft * mpg >= distance
};

console.log(zeroFuel(50, 25, 2))