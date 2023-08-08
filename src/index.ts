import NumberList from './models/NumberList';
import FileUtils from './utils/FileUtils';
import QuickSort from './sorting/QuickSort';
import yargs from 'yargs';
import MergeSort from './sorting/MergeSort';

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
    delimiter: string
  };



function main(): void {
  const inputFilePath = argv.input;
  const outputFilePath = argv.output;

  // Read numbers from input file
  const numbers = FileUtils.readNumbersFromFile(inputFilePath, argv.delimiter);

  // Create NumberList instance
  const numberList = new NumberList(numbers);

  // Sort numbers using QuickSort
  let sortingAlgorithm;
  switch (argv.algorithm) {
    case 'mergesort':
      sortingAlgorithm = new MergeSort(argv.order)
      break;
    default:
      sortingAlgorithm = new QuickSort(argv.order)
  }
  const sortedNumbers = sortingAlgorithm.sort(numberList.getNumbers());

  // Write sorted numbers to output file
  FileUtils.writeNumbersToFile(outputFilePath, sortedNumbers);

  console.log('Numbers sorted and written to output file.');
}


main();
