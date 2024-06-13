import { Column, Entity, OneToMany, ManyToOne } from 'typeorm';
import { Base } from './Base';
import { Users } from './Users';
import { Columns } from './Columns';

@Entity('boards')
export class Boards extends Base {
   @Column()
   title: string;

   @Column({ default: ''})
   description: string;

   @ManyToOne(() => Users,(user) => user.boards, {
      cascade: true
   })
   owner: Users;
  
   @OneToMany(() => Columns, (columns) => columns.board,)
   column: Columns[]
}