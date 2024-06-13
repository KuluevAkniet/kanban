import { BoardsService } from "./boards.service";
import { CreateBoardDto } from './board.dto';
import { UpdateBoardDto } from './update.board.dto';
export declare class BoardsController {
    private readonly boardService;
    constructor(boardService: BoardsService);
    createBoard(dto: CreateBoardDto): Promise<import("../../models/Boards").Boards[]>;
    updateBoard(id: number, dto: UpdateBoardDto): Promise<import("typeorm").UpdateResult>;
    getOneBoard(id: number): Promise<import("../../models/Boards").Boards>;
    getAllBoards(): Promise<import("../../models/Boards").Boards[]>;
    deleteBoard(id: number): Promise<import("typeorm").DeleteResult>;
}
