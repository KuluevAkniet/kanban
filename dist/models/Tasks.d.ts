import { PositionEnum } from '../enums/positionEnum';
import { Base } from './Base';
import { Columns } from './Columns';
export declare class Tasks extends Base {
    title: string;
    description: string;
    position: PositionEnum;
    column: Columns;
}
