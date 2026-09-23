import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Post()
  create(): string {
    return 'Buku Berhasil ditambahkan';
  }

  @Get()
  findAll(): string {
    return 'Menampilkan semua buku';
  }

  //Menampilkan data buku berdasarkan id
    @Get(':id')
    getBookByid(@Param('id') id: string): string {
        return `Data buku berdasarkan id: ${id}`;
    }
    @Put(':id')
    updateBookById(@Param('id') id: string): string {
        return `Data buku dengan id ${id} berhasil diperbarui`;
    }
    @Patch(':id')
    partiallyUpdateBookById(@Param('id') id: string): string {
        return `Data buku dengan id ${id} berhasil diperbarui sebagian`;
    }
    @Delete(':id')
    deleteBookById(@Param('id') id: string): string {
        return `Data buku dengan id ${id} berhasil dihapus`;
    }
}
