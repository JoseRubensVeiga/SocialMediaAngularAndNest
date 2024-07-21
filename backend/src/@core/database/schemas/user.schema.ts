import { EntitySchema } from 'typeorm';
import { User } from '../../domain/entities/user.entity';

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    profileUrl: {
      nullable: true,
      type: String,
    },
  },
});
