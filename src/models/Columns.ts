import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { PositionEnum } from '../enums/positionEnum';
import { Base } from './Base';
import { Boards } from './Boards';
import { Tasks } from './Tasks';


@Entity()
export class Columns extends Base {
    @Column()
    title: string;

    @ManyToOne(() => Boards, (boards) => boards.column, {
      cascade: true
    })
    board: Boards;

    @OneToMany(() => Tasks, (tasks) => tasks.column)
    tasks: Tasks[]

    @Column()
    position: PositionEnum;
}