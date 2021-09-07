import { Model } from "mongoose";

export interface IBaseRepository<T, M> {
  create(obj: T, model: Model<M>): Promise<boolean>
  update(id: string): Promise<boolean>
  detele(id: string): Promise<boolean>
  findOne(id: string): Promise<T>
  find(): Promise<T[]>
}