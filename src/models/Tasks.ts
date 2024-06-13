import { Column, Entity, ManyToOne } from 'typeorm';
import { PositionEnum } from '../enums/positionEnum';
import { Base } from './Base';
import { Columns } from './Columns';

@Entity()
export class Tasks extends Base {
    @Column()
    title: string;
    
    @Column()
    description: string;

    @Column()
    position: PositionEnum

    @ManyToOne(() => Columns, (columns) => columns.tasks, {
        cascade: true
    })
    column: Columns;
}