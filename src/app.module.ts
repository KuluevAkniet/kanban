import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UsersModule } from './modules/users/users.module';
import { AuthService } from './modules/auth/auth.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthController } from './modules/auth/auth.controller';
import { BoardsModule } from './modules/boards/boards.module';
import { ColumnsController } from './modules/columns/columns.controller';
import { TasksModule } from './/modules/tasks/tasks.module';
import { TasksService } from './modules/tasks/tasks.service';
import { TasksController } from './modules/tasks/tasks.controller';
import { ColumnsService } from './modules/columns/columns.service';
import { ColumnsModule } from './modules/columns/columns.module';

@Module({
  imports: [DbModule, ScheduleModule.forRoot(), UsersModule, AuthModule, BoardsModule, TasksModule, ColumnsModule],
  controllers: [ColumnsController, TasksController],
  providers: [ColumnsService, TasksService],
})
export class AppModule {}
