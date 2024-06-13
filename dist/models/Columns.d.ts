import { PositionEnum } from '../enums/positionEnum';
import { Base } from './Base';
import { Boards } from './Boards';
import { Tasks } from './Tasks';
export declare class Columns extends Base {
    title: string;
    board: Boards;
    tasks: Tasks[];
    position: PositionEnum;
}
