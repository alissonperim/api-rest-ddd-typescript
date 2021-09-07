import { User } from "../../entities/user/User"
import { IUserServices } from "../../services/interfaces/IUserService/IUserServices"
import { userModel } from "../../infra/models/Users/userSchema"
import bcrypt from "bcrypt"

export class CreateUserController {
  constructor(private _service: IUserServices) { }
  async createUser(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body
      const salt = await bcrypt.genSalt(10)
      const cryptoPassword = await bcrypt.hash(password, salt)
      const newUser = new User({ firstName, lastName, email, password: cryptoPassword })
      const userCreated = await this._service.create(newUser, userModel)
      return res.status(201).send(userCreated)
    } catch (error) {
      return res.status(400).send({ message: `Falha ao tentar registrar o usuário - ${error}` })
    }

  }
}