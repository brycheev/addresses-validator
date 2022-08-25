import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column({ nullable: true })
  region: string;

  @Column()
  locality: string;

  @Column()
  index: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  home: string;

  @Column({ nullable: true })
  flat: string;

  @Column({ nullable: true })
  extra: string;

  @CreateDateColumn()
  created: Date;
}
