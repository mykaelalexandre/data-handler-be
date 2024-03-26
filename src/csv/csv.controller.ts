import { Controller, Get, Query } from '@nestjs/common';
import { CsvService } from './csv.service';

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Get('dados')
  async getCsvData(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    try {
      const dados = await this.csvService.getCsvData(page, pageSize);
      return { success: true, data: dados };
    } catch (error) {
      return { success: false, message: 'Erro ao obter os dados do CSV', error };
    }
  }
}
