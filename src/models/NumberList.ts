// src/models/NumberList.ts
class NumberList {
    private numbers: number[];
  
    constructor(numbers: number[]) {
      this.numbers = numbers;
    }
  
    getNumbers(): number[] {
      return this.numbers.slice(); // Return a copy of the array
    }
  
    sortDescending(): void {
      this.numbers.sort((a, b) =>  a - b);
    }
  }
  
  export default NumberList;
  