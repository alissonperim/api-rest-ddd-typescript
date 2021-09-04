import { Mongoose } from "../../dataBase"

export interface IUserModel {
  firstName: String
  lastName: String
  email: String
  password: String
}

export const User = new Mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 3
  },
  lastName: {
    type: String,
    required: true,
    min: 3
  },
  email: {
    type: String,
    required: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/,
  },
  password: {
    type: String,
    required: true,
    match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  }
})

export const userModel = Mongoose.model<IUserModel>('user', User, 'user')