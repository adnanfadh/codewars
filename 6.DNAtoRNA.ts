export function DNAtoRNA(dna: string): string {
  // let rna:string = "";
  //   for (let index = 0; index < dna.length; index++) {
  //     rna += dna[index] === "T" ? 'U' : dna[index];    
  //   }
  // return rna;
  return dna.split('').map((el,i) => el === 'T' ? 'U' : el).join('') 
}

console.log(DNAtoRNA('GCAT'));