import { Module } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardsController } from './boards.controller';
import { DbModule } from "../../db/db.module";

@Module({
  imports: [DbModule],
  providers: [BoardsService],
  controllers: [BoardsController]
})
export class BoardsModule {

}
