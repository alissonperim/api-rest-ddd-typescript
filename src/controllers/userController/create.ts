import { User } from "../../entities/user/User"
import { IUserServices } from "../../services/interfaces/IUserService/IUserServices"
import { userModel } from "../../infra/models/Users/userSchema"

export class CreateUserController {
  constructor(private _service: IUserServices) { }
  async createUser(req, res) {
    try {
      const { firstName, lastName, email, password } = req.body
      const newUser = new User({ firstName, lastName, email, password })
      const userCreated = await this._service.create(newUser, userModel)
      return res.status(201).send(userCreated)
    } catch (error) {
      return res.status(400).send({ message: `Falha ao tentar registrar o usuário - ${error}` })
    }

  }
}