import { RoleEnum } from "../../../enums/roleEnumb";

export class CreateUserDto {
  fullName: string;
  email: string;
  login: string
  password: string;
  role: RoleEnum;
}
