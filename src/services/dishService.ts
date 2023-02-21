import entityManager from "../db";
import { Dishes as DishesEntity } from "../entitys/dishes";

class DishService {
    async getDishes() {
        const dishes = await entityManager
        .getRepository(DishesEntity)
        .find();
        return dishes;
    }
    
    async getDish(id: number) {
        const dish = await entityManager
        .getRepository(DishesEntity)
        .findOne({
            where: {
            id,
            },
        });
        return dish;
    }
    
    async createDish(dish: DishesEntity) {
        const newDish = await entityManager
        .getRepository(DishesEntity)
        .save(dish);
        return newDish;
    }
    
    async updateDish(id: number, dish: DishesEntity) {
        const updatedDish = await entityManager
        .getRepository(DishesEntity)
        .update(id, dish);
        return updatedDish;
    }
    
    async deleteDish(id: number) {
        const deletedDish = await entityManager
        .getRepository(DishesEntity)
        .delete(id);
        return deletedDish;
    }
}

export default new DishService();
