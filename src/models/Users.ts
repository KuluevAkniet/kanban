import { Base } from './Base';
import { Boards } from './Boards';
import { Column, Entity, OneToMany } from 'typeorm';
import { RoleEnum } from '../enums/roleEnumb';

@Entity('users')
export class Users extends Base {
  @Column()
  fullName: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  role: RoleEnum;

  @OneToMany(() => Boards, (boards) => boards.owner)
  boards: Boards

  @Column({nullable: true})
  refreshToken: string;
}
