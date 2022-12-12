import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CartController } from "./cart.controller";
import { CartRepo } from "./cart.repository";
import { CartService } from "./cart.service";
import { cart, cartSchema } from "./entities/cart.entity";

@Module ({
    imports: [
        MongooseModule.forFeature([{ name: cart.name, schema: cartSchema}])
    ],
    controllers: [CartController],
    providers:
    [
        CartService, 
        CartRepo,
    ],

    exports: [ CartService ]
})

export class CartModule {}