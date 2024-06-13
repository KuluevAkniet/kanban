import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeormConfigService } from './typeorm-config.service';
import { Users } from '../models/Users';
import { Boards } from '../models/Boards';
import { Columns } from '../models/Columns';
import { Tasks } from '../models/Tasks';
import { UserRepository } from "./repositories/user.repository";
import { ColumnRepository } from "./repositories/Column.repository";
import { TaskRepository } from "./repositories/task.repository";
import { BoardRepository } from "./repositories/board.repository";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: TypeormConfigService,
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([Users, Boards, Columns, Tasks]),
  ],
  providers: [
     UserRepository,
     ColumnRepository, 
     TaskRepository, 
     BoardRepository
    ],
  exports: [
    UserRepository, 
    ColumnRepository, 
    TaskRepository, 
    BoardRepository
  ]
})
export class DbModule {}
