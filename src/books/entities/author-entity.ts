import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Book } from "../../books/entities/book-entity.js";


@Entity({ name: "author" })
export class Author {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: 'varchar', length: 100 })
    nama_pengarang: string;

    @Column({ type: 'varchar', length: 100 })
    foto: string;

    @Column({ type: 'varchar', length: 100 })
    alamat: string;

    @OneToMany(() => Book, (item) => item.id, {
        cascade: true, // Menyimpan Order otomatis menyimpan seluruh item di dalamnya!
    })
    books: Book[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;
}