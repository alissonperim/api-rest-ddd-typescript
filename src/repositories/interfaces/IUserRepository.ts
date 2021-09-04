import { User } from "../../entities/user/User"
import { IUserModel } from "../../infra/models/Users/userSchema";
import { IBaseRepository } from "./IBaseRepository";

export interface IUserRepository extends IBaseRepository<User, IUserModel> {
  getUserByCpf()
}