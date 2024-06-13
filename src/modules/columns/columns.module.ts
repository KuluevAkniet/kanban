import { Module } from '@nestjs/common';
import { ColumnsService } from'./columns.service'
import { ColumnsController } from  './columns.controller'
import { DbModule } from "../../db/db.module";

@Module({
    imports: [DbModule],
    providers: [ColumnsService],
    controllers: [ColumnsController]
})
export class ColumnsModule {

}