import { uuid } from "uuidv4"

export class User {
  public readonly Id?: string
  public firstName: string
  public lastName: string
  public email: string
  public password: string

  constructor(props: Omit<User, "Id">, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.Id = uuid()
    }
  }
}