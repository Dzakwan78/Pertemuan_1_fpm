import { Test, TestingModule } from '@nestjs/testing';
import { BookAuthorsController } from './book-authors.controller.js';
import { BookAuthorsService } from './book-authors.service.js';

describe('BookAuthorsController', () => {
  let controller: BookAuthorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookAuthorsController],
      providers: [BookAuthorsService],
    }).compile();

    controller = module.get<BookAuthorsController>(BookAuthorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
