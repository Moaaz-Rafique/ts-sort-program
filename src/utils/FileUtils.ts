import fs from 'fs';
import path from 'path';

class FileUtils {
    static readNumbersFromFile(filePath: string, delimiter: string): number[] {
        try {

            const data = fs.readFileSync(path.join(__dirname, "./../"+filePath), "utf-8");
            const numbers = data.split(delimiter).map(Number).filter(e => e);
            return numbers;
        } catch (error) {
            console.error('Error reading input file:', error);
            process.exit(1);
        }
    }

    static writeNumbersToFile(filePath: string, numbers: number[]): void {
        try {
            const content = numbers.join(', ');
            fs.writeFileSync(path.join(__dirname, "./../" + filePath), content);
        } catch (error) {
            console.error('Error writing to output file:', error);
            process.exit(1);
        }
    }
}

export default FileUtils;