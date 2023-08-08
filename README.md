# TypeScript Sort Program

This TypeScript program reads a list of numbers from an input file, sorts them in descending order using various sorting algorithms, and writes the sorted list to an output file. It follows Object-Oriented Programming principles, utilizes data structures, and provides several command-line options for customization.

## Main Features

- Reads a list of numbers from an input file called "input.txt".
- Sorts the numbers in descending order using efficient sorting algorithms (QuickSort or MergeSort).
- Writes the sorted list of numbers to an output file called "output.txt".
- Employs Object-Oriented Programming principles, ensuring separation of concerns between input/output, sorting, and data structure code.
- Gracefully handles errors such as missing input files or write permissions for output files.

## Bonus Features

- Supports command-line options for customization:
  - `--input`: Specify the input file name.
  - `--output`: Specify the output file name.
  - `--order`: Choose sorting order ("ascending" or "descending").
  - `--algorithm`: Choose sorting algorithm ("quicksort" or "mergesort").
  - `--delimiter`: Choose the delimiter used in the input file.

## Usage

1. Install dependencies with `yarn`.
2. Run the program using the `yarn start` command with optional command-line arguments.

## Example:
```bash
yarn start --input=input.txt --output=output.txt --order=ascending --algorithm=mergesort --delimiter=,