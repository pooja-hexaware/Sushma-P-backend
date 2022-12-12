import {  Injectable } from '@nestjs/common';
import { CartRepo } from './cart.repository';
import { cart } from './entities/cart.entity';


@Injectable()
export class CartService {

  constructor( private readonly cartRepo: CartRepo) { }

  async create(restaurantObject: cart) {
    let cart = await this.cartRepo.create(restaurantObject);
    return cart;
  }

  async findAll() {
    return this.cartRepo.findAll();
  }

  async findOne(id: string) {
    return this.cartRepo.findById(id);
  }

  async update(id: string, updateRestaurantObject: cart) {
    return this.cartRepo.update(id, updateRestaurantObject);
  }

  async remove(id: string) {
    return this.cartRepo.delete(id);
  }
}