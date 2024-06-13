import { BoardRepository } from "../../db/repositories/board.repository";
import { UserRepository } from "../../db/repositories/user.repository";
import { CreateBoardDto } from './board.dto';
import { UpdateBoardDto } from './update.board.dto';
export declare class BoardsService {
    private readonly boardRepository;
    private readonly userRepository;
    constructor(boardRepository: BoardRepository, userRepository: UserRepository);
    createBoard(dto: CreateBoardDto): Promise<import("../../models/Boards").Boards[]>;
    updateBoard(id: number, dto: UpdateBoardDto): Promise<import("typeorm").UpdateResult>;
    getOneBoard(id: number): Promise<import("../../models/Boards").Boards>;
    getAll(): Promise<import("../../models/Boards").Boards[]>;
    deleteBoard(id: number): Promise<import("typeorm").DeleteResult>;
}
