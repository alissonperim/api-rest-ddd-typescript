import { Model } from "mongoose"

export interface IBaseService<T, M> {
  create(obj: T, model: Model<M>): Promise<boolean>
  update(id: string): Promise<boolean>
  delete(id: string): Promise<boolean>
  findById(id: string): Promise<T>
  findAll(): Promise<T[]>
}