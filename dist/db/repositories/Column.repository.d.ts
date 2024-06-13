import { Columns } from "../../models/Columns";
import { BaseRepository } from "./base.repository";
import { Repository } from "typeorm";
export declare class ColumnRepository extends BaseRepository<Columns> {
    protected readonly columnRepository: Repository<Columns>;
    constructor(columnRepository: Repository<Columns>);
    createColumn(data: any): Promise<Columns[]>;
    findById(criteria: any): Promise<Columns>;
    findAll(): Promise<Columns[]>;
    updateColumn(criteria: any, data: any): Promise<import("typeorm").UpdateResult>;
    deleteColumn(id: number): Promise<import("typeorm").DeleteResult>;
}
