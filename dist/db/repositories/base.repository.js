"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    async create(data) {
        const entity = await this.repository.create(data);
        return await this.repository.save(entity);
    }
    async findAll(skip, limit) {
        return this.repository.find({
            skip: skip,
            take: limit,
        });
    }
    async findOne(criteria) {
        return await this.repository.findOne({
            where: criteria
        });
    }
    async update(criteria, data) {
        const car = await this.repository.findOne(criteria);
        if (car) {
            const filteredData = Object.fromEntries(Object.entries(data).filter(([key, value]) => value !== undefined));
            await this.repository.save({ ...car, ...filteredData });
            return "Обновление произошло успешно";
        }
    }
    async remove(id) {
        return this.repository.delete(id);
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map