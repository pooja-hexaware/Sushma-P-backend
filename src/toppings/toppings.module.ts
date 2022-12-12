import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { toppings, toppingsSchema } from "./entities/toppings.entity";
import { ToppingsController } from "./toppings.controller";
import { ToppingsRepo } from "./toppings.repository";
import { ToppingsService } from "./toppings.service";


@Module ({
    imports: [
        MongooseModule.forFeature([{ name: toppings.name, schema: toppingsSchema}])
    ],
    controllers: [ToppingsController],
    providers:
    [
        ToppingsService, 
        ToppingsRepo
    ],

    exports: [ ToppingsService ]
})

export class ToppingsModule {}