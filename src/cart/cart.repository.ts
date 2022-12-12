import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { cart, cartDocument } from "./entities/cart.entity";


@Injectable()
export class CartRepo {
    constructor(
        @InjectModel(cart.name)
        private readonly cartModel: Model<cartDocument>,
    ) { }
    async create(data): Promise<cart> {
        return new this.cartModel(data).save();
    }

    async findAll(): Promise<cart[]> {
        return this.cartModel.find({})
            .exec();
    }

    async findById(id): Promise<cart> {
        const filter = { _id: id };
        return this.cartModel.findOne(filter)
            .exec();
    }

    async update(restaurantId, data): Promise<cart> {
        const filter = { _id: restaurantId };
        return  this.cartModel.findByIdAndUpdate(filter, data);
    }

    async delete(restaurantId): Promise<cart> {
        return this.cartModel.findByIdAndDelete(restaurantId);
    }
}