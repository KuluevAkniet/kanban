import { Base } from './Base';
import { Users } from './Users';
import { Columns } from './Columns';
export declare class Boards extends Base {
    title: string;
    description: string;
    owner: Users;
    column: Columns[];
}
