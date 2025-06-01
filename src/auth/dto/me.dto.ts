import { User } from "generated/prisma";
import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class MeDto implements Omit<User, 'password'> {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstName: string;

  @Expose()
  lastName: string;

  @Expose()
  role: string;

  @Expose()
  teamId: string | null;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  
}