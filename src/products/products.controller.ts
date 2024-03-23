import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { ProductsService } from './products.service';

import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/createProduct.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  public async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  public async create(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productsService.create(createProductDto);
  }

  @Get(':id')
  public async findOne(@Param('id') id: string): Promise<Product> {
    const product = await this.productsService.fineOne(id);

    if (product === undefined) {
      throw new NotFoundException();
    }

    return product;
  }
}
