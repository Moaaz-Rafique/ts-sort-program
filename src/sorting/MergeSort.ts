import SortingAlgorithm from './SortingAlgorithm';

class MergeSort extends SortingAlgorithm {
  constructor(order: string) {
    super(order);
  }

  sort(numbers: number[]): number[] {
    this.mergeSort(numbers, 0, numbers.length - 1);
    return numbers;
  }

  private compare(a: number, b: number): boolean {
    return this.order === 'ascending' ? a <= b : a >= b;
  }

  private mergeSort(numbers: number[], left: number, right: number): void {
    if (left < right) {
      const middle = Math.floor((left + right) / 2);
      this.mergeSort(numbers, left, middle);
      this.mergeSort(numbers, middle + 1, right);
      this.merge(numbers, left, middle, right);
    }
  }

  private merge(numbers: number[], left: number, middle: number, right: number): void {
    const leftSize = middle - left + 1;
    const rightSize = right - middle;

    const leftArray = new Array(leftSize);
    const rightArray = new Array(rightSize);

    for (let i = 0; i < leftSize; i++) {
      leftArray[i] = numbers[left + i];
    }

    for (let i = 0; i < rightSize; i++) {
      rightArray[i] = numbers[middle + 1 + i];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (i < leftSize && j < rightSize) {
      if (this.compare(leftArray[i], rightArray[j])) {
        numbers[k] = leftArray[i];
        i++;
      } else {
        numbers[k] = rightArray[j];
        j++;
      }
      k++;
    }

    while (i < leftSize) {
      numbers[k] = leftArray[i];
      i++;
      k++;
    }

    while (j < rightSize) {
      numbers[k] = rightArray[j];
      j++;
      k++;
    }
  }
}

export default MergeSort;