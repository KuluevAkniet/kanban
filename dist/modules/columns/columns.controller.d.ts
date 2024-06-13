import { ColumnsService } from "./columns.service";
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
export declare class ColumnsController {
    private readonly columnsService;
    constructor(columnsService: ColumnsService);
    createColumn(dto: CreateColumnDto): Promise<import("../../models/Columns").Columns[]>;
    updateColumn(id: number, dto: UpdateColumnDto): Promise<import("typeorm").UpdateResult>;
    findAll(): Promise<import("../../models/Columns").Columns[]>;
    deleteColumn(id: number): Promise<import("typeorm").DeleteResult>;
}
