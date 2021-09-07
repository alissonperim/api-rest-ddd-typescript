import { IBaseRepository } from '../repositories/interfaces/IBaseRepository';
import { IBaseService } from './interfaces/IBaseService'
import { Model } from 'mongoose';

export class baseService<T, M> implements IBaseService<T, M>{
  constructor(private _repository: IBaseRepository<T, M>) { }
  async create(obj: T, model: Model<M>): Promise<boolean> {
    try {
      await this._repository.create(obj, model)
      return true
    } catch (error) {
      throw new Error(error)
    }
  }
  update(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  findById(id: string): Promise<T> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<T[]> {
    throw new Error('Method not implemented.');
  }

}