import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, ParseIntPipe, NotFoundException, Req } from '@nestjs/common';
import { toppings } from './entities/toppings.entity';
import { ToppingsService } from './toppings.service';


@Controller('toppings')
export class ToppingsController {
  constructor(
    private readonly toppingsService: ToppingsService
  ) { }

  @Post()
  async create(@Res() res, @Body() toppingsObject: toppings) {
    const result = await this.toppingsService.create(toppingsObject);
    if (!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {
    const toppingsList = await this.toppingsService.findAll();
    if (!toppingsList) return null;
    return toppingsList;
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const roleObject = await this.toppingsService.findOne(id);
    if (!roleObject) return null;
    return res.status(HttpStatus.OK).json(roleObject);
  }

  @Patch(':id')
  async update(@Res() res, @Param('id') id: string, @Body() updatedToppingsObject: toppings) {
    const result = await this.toppingsService.update(id, updatedToppingsObject);
    if (!result) return null;
    return res.status(HttpStatus.OK).json(result);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.toppingsService.remove(id);
  }
}