import { In, Repository, UpdateResult } from 'typeorm';

export abstract class BaseRepository<Entity> {
  protected readonly repository: Repository<Entity>;

  async create(data: any): Promise<Entity | Entity[]> {
    const entity = await this.repository.create(data);
    return await this.repository.save(entity);
  }

  async findAll(skip: number, limit: number) {
    return this.repository.find({
      skip: skip,
      take: limit,
    });
  }

  async findOne(criteria: any){
    return await this.repository.findOne({
      where: criteria
    })
  }

  async update(criteria: any, data: any) {
    const car = await this.repository.findOne(criteria);

    if (car) {
      const filteredData = Object.fromEntries(
        Object.entries(data).filter(([key, value]) => value !== undefined)
      );

      await this.repository.save({ ...car, ...filteredData });
      return "Обновление произошло успешно"
    }
  }


  async remove(id: string) {
    return this.repository.delete(id)
  }
}

