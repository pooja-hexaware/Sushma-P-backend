import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { restaurant, restaurantSchema } from "./entities/restaurants.entity";
import { RestaurantController } from "./restaurants.controller";
import { RestaurantRepo } from "./restaurants.repository";
import { RestaurantService } from "./restaurants.service";

@Module ({
    imports: [
        MongooseModule.forFeature([{ name: restaurant.name, schema: restaurantSchema}])
    ],
    controllers: [RestaurantController],
    providers:
    [
        RestaurantService, 
        RestaurantRepo
    ],

    exports: [ RestaurantService ]
})

export class RestaurantModule {}