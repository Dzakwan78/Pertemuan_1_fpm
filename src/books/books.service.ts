import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'; // sesuaikan jika ada yang lain
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

//PERBAIKAN IMPORT PATHsesuai struktur folder di VS Code
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  // 1. CREATE
  async create(dto: CreateBookDto): Promise<Book> {
    const newBook = this.bookRepository.create(dto);
    return await this.bookRepository.save(newBook);
  }

  // 2. READ ALL ( FInd By Id)
  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  // 3. READ ONE
  async findOne(id: string): Promise<Book> {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException(`Buku dengan ID #${id} tidak ditemukan.`);
    }
    return book;
  }

  // 4. UPDATE
  async update(id: string, dto: UpdateBookDto): Promise<Book> {
    const book = await this.findOne(id);
    const updatedBook = this.bookRepository.merge(book, dto);
    return await this.bookRepository.save(updatedBook);
  }

  // 5. SOFT DELETE
  async remove(id: string): Promise<{ message: string; deletedId: string }> {
    await this.findOne(id);
    await this.bookRepository.softDelete(id);

    return {
      message: `Buku #${id} berhasil diarsipkan.`,
      deletedId: id,
    };
  }

  // 6. RESTORE
  async restore(id: string): Promise<{ message: string }> {
    await this.bookRepository.restore(id);
    return { message: `Buku #${id} berhasil dipulihkan.` };
  }
}