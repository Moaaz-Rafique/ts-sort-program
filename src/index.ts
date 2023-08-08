import NumberList from './models/NumberList';
import FileUtils from './utils/FileUtils';
import QuickSort from './sorting/QuickSort';

function main(): void {
  const inputFilePath = 'input.txt';
  const outputFilePath = 'output.txt';
  
  // Read numbers from input file
  const numbers = FileUtils.readNumbersFromFile(inputFilePath);
  
  // Create NumberList instance
  const numberList = new NumberList(numbers);
  
  // Sort numbers using QuickSort
  const sortingAlgorithm = new QuickSort();
  const sortedNumbers = sortingAlgorithm.sort(numberList.getNumbers());
  
  // Write sorted numbers to output file
  FileUtils.writeNumbersToFile(outputFilePath, sortedNumbers);
  
  console.log('Numbers sorted and written to output file.');
}
main();
