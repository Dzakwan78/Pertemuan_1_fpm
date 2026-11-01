// Tugas No 5

import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from '../../categories/entities/category.entity.js';
import { Publisher } from '../../publishers/entities/publisher.entity.js';
import { BookAuthor } from '../../book-authors/entities/book-author.entity.js';
import { OrderItem } from '../../order_items/entities/order_item.entity.js';

@Entity({ name: 'books' })
export class Book {
  @ManyToOne(
  () => Publisher,
  (publisher) => publisher.books,
  { nullable: false },
)
@JoinColumn({ name: 'publisher_id' })
publisher: Publisher;

@OneToMany(
  () => BookAuthor,
  (bookAuthor: BookAuthor) => bookAuthor.book,
)
bookAuthors: BookAuthor[];

@OneToMany(
  () => OrderItem,
  (orderItem) => orderItem.book,
)
orderItems: OrderItem[];

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 30 })
  title: string;

  @Column({ type: 'varchar', length: 45, unique: true })
  isbn: string;

  @Column({ type: 'int', default: 0 })
  publishedYear: number;

  @Column({ type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
  price: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

@ManyToOne(
  () => Category,
  (category) => category.books,
  { nullable: false },
)
@JoinColumn({ name: 'category_id' })
category: Category;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  deletedAt: Date | null;
}