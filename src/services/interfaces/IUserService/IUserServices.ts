import { User } from "../../../entities/user/User"
import { IUserModel } from "../../../infra/models/Users/userSchema"
import { IBaseService } from "../IBaseService"

export interface IUserServices extends IBaseService<User, IUserModel> {

}