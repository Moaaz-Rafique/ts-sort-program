import SortingAlgorithm from './SortingAlgorithm';

class QuickSort extends SortingAlgorithm {
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

  private partition(numbers: number[], low: number, high: number): number {
    const pivot = numbers[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      if (numbers[j] >= pivot) {
        i++;
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
      }
    }

    [numbers[i + 1], numbers[high]] = [numbers[high], numbers[i + 1]];
    return i + 1;
  }
}

export default QuickSort;