export function rps(p1: string, p2: string): string{
  if(p1 == p2) return "Draw!"

  // return (p1 === 'rock' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'paper' && p2 === 'rock') ? 'Player 1 won!' : 'Player 2 won!'

  const rules = {
    'rock' : 'scissors',
    'scissors' : 'paper',
    'paper' : 'rock'
  }

  return `Player ${rules[p1] === p2 ? '1' : '2'} Won`
}

console.log(rps('rock', 'Paper'))