
import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Patch,
  Param,
  Body,
} from '@nestjs/common';

import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  // GET /books
  @Get()
  getBooks() {
    return this.booksService.findAll();
  }

  // POST /books
  @Post()
  createBook(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }

  // GET /books/:id
  @Get(':id')
  getBookById(@Param('id') id: string) {
    return this.booksService.findOne(id);
  }

  // PUT /books/:id
  @Put(':id')
  updateBookById(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  // PATCH /books/:id
  @Patch(':id')
  updatePartialBook(
    @Param('id') id: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    return this.booksService.update(id, updateBookDto);
  }

  // DELETE /books/:id
  @Delete(':id')
  deleteBookById(@Param('id') id: string) {
    return this.booksService.remove(id);
  }
}