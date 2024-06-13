import { Boards } from "../../models/Boards";
import { BaseRepository } from "./base.repository";
import { Repository } from "typeorm";
export declare class BoardRepository extends BaseRepository<Boards> {
    protected readonly boardRepository: Repository<Boards>;
    constructor(boardRepository: Repository<Boards>);
    createBoard(data: any): Promise<Boards[]>;
    findById(criteria: any): Promise<Boards>;
    findAll(): Promise<Boards[]>;
    updateBoard(criteria: any, data: any): Promise<import("typeorm").UpdateResult>;
    deleteBoard(id: number): Promise<import("typeorm").DeleteResult>;
}
