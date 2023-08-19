import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateUserDto } from '../dto/user.dto';

@Entity()
export class User {
  update(id: number, CreateProductDto: any) {
      throw new Error('Method not implemented.');
  }
  remove(id: number) {
      throw new Error('Method not implemented.');
  }
  finOne(id: number): Promise<import("../../products/entities/product.entity").Product> {
      throw new Error('Method not implemented.');
  }
  findAll() {
      throw new Error('Method not implemented.');
  }
  create(usertDto: CreateUserDto) {
      throw new Error('Method not implemented.');
  }
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  sexo: string;

  @Column({ type: 'boolean', default: true })
  active: boolean;
}
