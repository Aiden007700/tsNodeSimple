import entityManager from "../db";
import { Users as UsersEntity } from "../entitys/users";

class UserService {

  async getUsers() {
    const users = await entityManager.getRepository(UsersEntity).find();
    return users;
  }

  async getUser(id: number) {
    const user = await entityManager.getRepository(UsersEntity).findOne({
        where: {
            id
        }
    });
    return user;
  }

  async createUser(user: UsersEntity) {
    const newUser = await entityManager.getRepository(UsersEntity).save(user);
    return newUser;
  }

  async updateUser(id: number, user: UsersEntity) {
    const updatedUser = await entityManager.getRepository(UsersEntity).update(id, user);
    return updatedUser;
  }

  async deleteUser(id: number) {
    const deletedUser = await entityManager.getRepository(UsersEntity).delete(id);
    return deletedUser;
  }

}

export default new UserService();