import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const { MONGO_URI } = process.env

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("DB connected!")
  })
  .catch(error => {
    console.log(error)
  })

export { mongoose as Mongoose }