// Tugas No 7

import { Entity, ManyToOne, JoinColumn, PrimaryColumn,} from 'typeorm';
import { Book } from '../../books/entities/book-entity.js';
import { Author } from '../../authors/entities/author.entity.js';

@Entity({ name: 'book_authors' })
export class BookAuthor {
  @PrimaryColumn({ name: 'book_id', type: 'uuid' })
  bookId: string;

  @PrimaryColumn({ name: 'author_id', type: 'uuid' })
  authorId: string;

  @ManyToOne(
    () => Book,
    (book) => book.bookAuthors,
    { nullable: false },
  )
  @JoinColumn({ name: 'book_id' })
  book: Book;

  @ManyToOne(
    () => Author,
    (author) => author.bookAuthors,
    { nullable: false },
  )
  @JoinColumn({ name: 'author_id' })
  author: Author;
}
