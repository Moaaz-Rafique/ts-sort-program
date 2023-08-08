import SortingAlgorithm from './SortingAlgorithm';

class QuickSort extends SortingAlgorithm {
  constructor(order: string){
    super(order)
  }
  sort(numbers: number[]): number[] {
    this.quickSort(numbers, 0, numbers.length - 1);
    return numbers;
  }

  private quickSort(numbers: number[], low: number, high: number): void {
    if (low < high) {
      const partitionIndex = this.partition(numbers, low, high);
      this.quickSort(numbers, low, partitionIndex - 1);
      this.quickSort(numbers, partitionIndex + 1, high);
    }
  }
  private compare(a: number, b: number): boolean {
    return this.order === 'descending' ? a >= b : a <= b;
  }
  private partition(numbers: number[], low: number, high: number): number {
    const pivot = numbers[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {      
      if (this.compare(numbers[j], pivot)) {
        i++;
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
    }

    [numbers[i + 1], numbers[high]] = [numbers[high], numbers[i + 1]];
    return i + 1;
  }
}

export default QuickSort;