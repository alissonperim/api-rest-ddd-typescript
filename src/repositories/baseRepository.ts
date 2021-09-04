import { IBaseRepository } from "./interfaces/IBaseRepository"
import { Model } from "mongoose";
import { Mongoose } from "../infra/dataBase";

export class BaseRepository<T, M> implements IBaseRepository<T, M>{
  constructor() { }
  create(obj: T, model: Model<M>): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  detele(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): Promise<T> {
    throw new Error("Method not implemented.");
  }
  find(obj: T): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
}