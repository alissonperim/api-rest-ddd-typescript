import { IUserRepository } from '../interfaces/IUserRepository'
import { User } from "../../entities/user/User"
import { BaseRepository } from "../baseRepository"
import { IUserModel, userModel } from '../../infra/models/Users/userSchema'

export class UserRepositoryory extends BaseRepository<User, IUserModel> implements IUserRepository {
  getUserByCpf() {
    try {
    }
    catch (error) {
      throw new Error('Method not implemented.');
    }
  }

}