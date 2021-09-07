import { User } from "../../entities/user/User";
import { IUserModel } from "../../infra/models/Users/userSchema";
import { baseService } from "../baseService";
import { IUserServices } from "../interfaces/IUserService/IUserServices";

export class userService extends baseService<User, IUserModel> implements IUserServices {

}