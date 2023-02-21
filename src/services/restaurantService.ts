import entityManager from "../db";
import { Users as UsersEntity } from "../entitys/users";
import { Restaurants as RestaurantsEntity } from "../entitys/restaurants";

class RestaurantService {
  async getRestaurants() {
      
    const restaurants = await entityManager
      .getRepository(RestaurantsEntity)
      .find();
    return restaurants;
  }

  async getRestaurant(id: number) {
    const restaurant = await entityManager
      .getRepository(RestaurantsEntity)
      .findOne({
        where: {
          id,
        },
      });
    return restaurant;
  }

  async createRestaurant(restaurant: RestaurantsEntity) {
    const newRestaurant = await entityManager
      .getRepository(RestaurantsEntity)
      .save(restaurant);
    return newRestaurant;
  }

  async updateRestaurant(id: number, restaurant: RestaurantsEntity) {
    const updatedRestaurant = await entityManager
      .getRepository(RestaurantsEntity)
      .update(id, restaurant);
    return updatedRestaurant;
  }

  async deleteRestaurant(id: number) {
    const deletedRestaurant = await entityManager
      .getRepository(RestaurantsEntity)
      .delete(id);
    return deletedRestaurant;
  }
}

export default new RestaurantService();