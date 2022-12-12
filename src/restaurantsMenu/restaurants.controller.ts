import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, ParseIntPipe, NotFoundException, Req } from '@nestjs/common';
import { restaurant } from './entities/restaurants.entity';
import { RestaurantService } from './restaurants.service';

@Controller('restaurant')
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService
  ) { }

  @Post()
  async create(@Res() res, @Body() restaurantObject: restaurant) {
    const result = await this.restaurantService.create(restaurantObject);
    if (!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {
    const restaurantList = await this.restaurantService.findAll();
    if (!restaurantList) return null;
    return restaurantList;
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const roleObject = await this.restaurantService.findOne(id);
    if (!roleObject) return null;
    return res.status(HttpStatus.OK).json(roleObject);
  }

  @Patch(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatedRoleObject: restaurant) {
    const result = await this.restaurantService.update(id, updatedRoleObject);
    if (!result) return null;
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.restaurantService.remove(id);
  }
}
