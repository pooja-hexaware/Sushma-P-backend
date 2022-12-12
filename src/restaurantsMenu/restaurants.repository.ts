import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { restaurant, restaurantDocument } from "./entities/restaurants.entity";


@Injectable()
export class RestaurantRepo {
    constructor(
        @InjectModel(restaurant.name)
        private readonly restaurantModel: Model<restaurantDocument>,
    ) { }
    async create(data): Promise<restaurant> {
        return new this.restaurantModel(data).save();
    }

    async findAll(): Promise<restaurant[]> {
        return this.restaurantModel.find({})
            .exec();
    }

    async findById(id): Promise<restaurant> {
        const filter = { _id: id };
        return this.restaurantModel.findOne(filter)
            .exec();
    }

    async update(restaurantId, data): Promise<restaurant> {
        const filter = { _id: restaurantId };
        return  this.restaurantModel.findByIdAndUpdate(filter, data);
    }

    async delete(restaurantId): Promise<restaurant> {
        return this.restaurantModel.findByIdAndDelete(restaurantId);
    }
}