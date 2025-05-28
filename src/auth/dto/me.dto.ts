import { User } from "generated/prisma";

export class MeDto implements Omit<User, 'password'> {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  teamId: string | null;
  createdAt: Date;
  updatedAt: Date;

  constructor(user: User) {
    this.id = user.id;
    this.email = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.role = user.role;
    this.teamId = user.teamId;
  }
}