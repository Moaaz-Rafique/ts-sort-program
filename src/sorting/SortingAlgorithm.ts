abstract class SortingAlgorithm {
  protected order: string;
  constructor(order: string) {
    this.order = order;
  }
  abstract sort(numbers: number[]): number[];
}

export default SortingAlgorithm;