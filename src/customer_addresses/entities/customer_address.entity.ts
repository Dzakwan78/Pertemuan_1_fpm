// Tugas No 2

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity.js';

@Entity({ name: 'customer_addresses' })
export class CustomerAddress {
  [x: string]: any;
  @PrimaryGeneratedColumn('uuid')
  id: string;

@ManyToOne(() => Customer,{ nullable: false },)
@JoinColumn({ name: 'customer_id' })

  @Column({ name: 'customer_id', type: 'uuid' })
  customerId: string;

  @Column({ name: 'recipient_name', type: 'varchar', length: 150 })
  recipientName: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  city: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 10 })
  postalCode: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}