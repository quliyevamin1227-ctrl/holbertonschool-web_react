interface MajorCredits {
  credits: number;
  brand: 'major';
}

interface MinorCredits {
  credits: number;
  brand: 'minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'minor' };
}

console.log(sumMajorCredits({ credits: 3, brand: 'major' }, { credits: 4, brand: 'major' }));
console.log(sumMinorCredits({ credits: 1, brand: 'minor' }, { credits: 2, brand: 'minor' }));
