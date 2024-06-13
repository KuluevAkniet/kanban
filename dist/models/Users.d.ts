import { Base } from './Base';
import { Boards } from './Boards';
import { RoleEnum } from '../enums/roleEnumb';
export declare class Users extends Base {
    fullName: string;
    login: string;
    password: string;
    email: string;
    role: RoleEnum;
    boards: Boards;
    refreshToken: string;
}
