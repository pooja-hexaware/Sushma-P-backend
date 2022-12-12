import {  Injectable } from '@nestjs/common';
import { restaurant } from './entities/restaurants.entity';
import { RestaurantRepo } from './restaurants.repository';


@Injectable()
export class RestaurantService {

  constructor( private readonly restaurantRepo: RestaurantRepo) { }

  async create(restaurantObject: restaurant) {
    let restaurantname = await this.restaurantRepo.create(restaurantObject);
    return restaurantname;
  }

  async findAll() {
    return this.restaurantRepo.findAll();
  }

  async findOne(id: string) {
    return this.restaurantRepo.findById(id);
  }

  async update(id: string, updateRestaurantObject: restaurant) {
    return this.restaurantRepo.update(id, updateRestaurantObject);
  }

  async remove(id: string) {
    return this.restaurantRepo.delete(id);
  }
}