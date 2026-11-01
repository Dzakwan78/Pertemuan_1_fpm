import { Module } from '@nestjs/common';
import { BookAuthorsService } from './book-authors.service.js';
import { BookAuthorsController } from './book-authors.controller.js';

@Module({
  controllers: [BookAuthorsController],
  providers: [BookAuthorsService],
})
export class BookAuthorsModule {}
