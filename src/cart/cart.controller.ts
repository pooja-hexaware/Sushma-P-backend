import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, ParseIntPipe, NotFoundException, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { cart } from './entities/cart.entity';


@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService
  ) { }

  @Post()
  async create(@Res() res, @Body() restaurantObject: cart) {
    const result = await this.cartService.create(restaurantObject);
    if (!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {
    const cartList = await this.cartService.findAll();
    if (!cartList) return null;
    return cartList;
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const Object = await this.cartService.findOne(id);
    if (!Object) return null;
    return res.status(HttpStatus.OK).json(Object);
  }

  @Patch(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatedObject: cart) {
    const result = await this.cartService.update(id, updatedObject);
    if (!result) return null;
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.cartService.remove(id);
  }
}
