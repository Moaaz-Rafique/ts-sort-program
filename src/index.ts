import NumberList from './models/NumberList';
import FileUtils from './utils/FileUtils';
import QuickSort from './sorting/QuickSort';
import yargs from 'yargs';

const argv = yargs(process.argv.slice(2))
  .option('input', {
    describe: 'Input file path',
    default: 'input.txt',
    type: 'string',
  })
  .option('output', {
    describe: 'Output file path',
    default: 'output.txt',
    type: 'string',
  })
  .option('order', {
    describe: 'Sorting order (ascending or descending)',
    choices: ['ascending', 'descending'],
    default: 'descending',
  })
  .option('algorithm', {
    describe: 'Sorting algorithm (quicksort or mergesort)',
    choices: ['quicksort', 'mergesort'],
    default: 'quicksort',
  })
  .option('delimiter', {
    describe: 'Delimiter used in the input file',
    type: 'string',
    default: ', ',
  })
  // Add more options here
  .argv as {
    input: string;
    output: string;
    order: string;
    algorithm: string;
  };



function main(): void {
  const inputFilePath = argv.input;
  const outputFilePath = argv.output;

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
