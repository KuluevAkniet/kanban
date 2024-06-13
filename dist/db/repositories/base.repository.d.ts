import { Repository } from 'typeorm';
export declare abstract class BaseRepository<Entity> {
    protected readonly repository: Repository<Entity>;
    create(data: any): Promise<Entity | Entity[]>;
    findAll(skip: number, limit: number): Promise<Entity[]>;
    findOne(criteria: any): Promise<Entity>;
    update(criteria: any, data: any): Promise<string>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
