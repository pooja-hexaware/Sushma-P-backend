import {  Injectable } from '@nestjs/common';
import { toppings } from './entities/toppings.entity';
import { ToppingsRepo } from './toppings.repository';


@Injectable()
export class ToppingsService {

  constructor( private readonly toppingsRepo: ToppingsRepo) { }

  async create(restaurantObject: toppings) {
    let toppingsname = await this.toppingsRepo.create(restaurantObject);
    return toppingsname;
  }

  async findAll() {
    return this.toppingsRepo.findAll();
  }

  async findOne(id: string) {
    return this.toppingsRepo.findById(id);
  }

  async update(id: string, updateToppingsObject: toppings) {
    return this.toppingsRepo.update(id, updateToppingsObject);
  }

  async remove(id: string) {
    return this.toppingsRepo.delete(id);
  }
}