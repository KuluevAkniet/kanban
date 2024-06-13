import { RoleEnum } from "../../../enums/roleEnumb";
export declare class CreateUserDto {
    fullName: string;
    email: string;
    login: string;
    password: string;
    role: RoleEnum;
}
