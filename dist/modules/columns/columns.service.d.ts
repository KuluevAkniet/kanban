import { BoardRepository } from "../../db/repositories/board.repository";
import { ColumnRepository } from "../../db/repositories/Column.repository";
import { CreateColumnDto } from './dto/create-column.dto';
import { UpdateColumnDto } from './dto/update-column.dto';
export declare class ColumnsService {
    private readonly boardRepository;
    private readonly columnRepository;
    constructor(boardRepository: BoardRepository, columnRepository: ColumnRepository);
    createColumn(dto: CreateColumnDto): Promise<import("../../models/Columns").Columns[]>;
    updateColumn(id: number, dto: UpdateColumnDto): Promise<import("typeorm").UpdateResult>;
    findAll(): Promise<import("../../models/Columns").Columns[]>;
    deleteColumn(id: number): Promise<import("typeorm").DeleteResult>;
}
