import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'Penulis 1',
      isbn: '1234567890',
      publishYear: 2020,
      isAvailable: true,
    },
  ];

  // GET /books
  findAll(): Book[] {
    return this.books;
  }

  // POST /books
  create(createBookDto: CreateBookDto): Book {
    const newBook: Book = {
      id: this.books.length + 1,
      title: createBookDto.title,
      author: createBookDto.author,
      isbn: createBookDto.isbn,
      publishYear: createBookDto.publishYear,
      isAvailable: createBookDto.isAvailable,
    };

    this.books.push(newBook);

    return newBook;
  }
}