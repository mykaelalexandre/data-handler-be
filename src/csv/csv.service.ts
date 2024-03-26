import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import {parse} from 'papaparse';

@Injectable()
  export class CsvService {
    async getCsvData(page: number, pageSize: number): Promise<any[]> {
      const fileData = fs.readFileSync('data.csv', 'utf8');
      const parsedData = parse(fileData, { header: true });
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      return parsedData.data.slice(startIndex, endIndex);
    }
  }