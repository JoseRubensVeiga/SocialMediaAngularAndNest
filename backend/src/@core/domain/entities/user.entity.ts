import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: String })
  name: string;

  @Column({
    nullable: true,
    type: String,
  })
  profileUrl: string;

  @Column({
    unique: true,
    type: String,
  })
  email: string;

  @Column({ type: String })
  password: string;
}
