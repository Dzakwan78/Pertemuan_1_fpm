import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity({ name: "author"})
export class Author {
    @PrimaryGeneratedColumn("uuid")
        id: string;
    
        @Column({ type: 'varchar', length: 100 })
        nama_pengarang: string;
    
        @Column({ type: 'varchar', length: 100 })
        foto: string;
    
        @Column({ type: 'varchar', length: 100 })
        alamat: string;

        
    
        @CreateDateColumn({ name: 'created_at' })
        createdAt: Date;
    
        @UpdateDateColumn({ name: 'updated_at' })
        updatedAt: Date;
    
        @DeleteDateColumn({ name: 'deleted_at', nullable: true })
        deletedAt: Date;
}