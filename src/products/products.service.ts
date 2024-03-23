import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';
import { CreateProductDto } from './dto/createProduct.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  public async create(createProductDto: CreateProductDto): Promise<Product> {
    const createProduct = await this.productModel.create(createProductDto);
    return createProduct;
  }

  public async findAll(): Promise<Product[]> {
    return this.productModel.find().lean().exec();
  }

  public async fineOne(id: string): Promise<Product | undefined> {
    try {
      return await this.productModel.findById(id).lean().exec();
    } catch {
      return undefined;
    }
  }
}
