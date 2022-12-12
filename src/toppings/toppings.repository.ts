import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { toppings, toppingsDocument } from "./entities/toppings.entity";


@Injectable()
export class ToppingsRepo {
    constructor(
        @InjectModel(toppings.name)
        private readonly toppingsModel: Model<toppingsDocument>,
    ) { }
    async create(data): Promise<toppings> {
        return new this.toppingsModel(data).save();
    }

    async findAll(): Promise<toppings[]> {
        return this.toppingsModel.find({})
            .exec();
    }

    async findById(id): Promise<toppings> {
        const filter = { _id: id };
        return this.toppingsModel.findOne(filter)
            .exec();
    }

    async update(toppingsId, data): Promise<toppings> {
        const filter = { _id: toppingsId };
        return  this.toppingsModel.findByIdAndUpdate(filter, data);
    }

    async delete(toppingsId): Promise<toppings> {
        return this.toppingsModel.findByIdAndDelete(toppingsId);
    }
}