import { CreateProductDto, UpdateProductDto } from "../dtos/producto.datos";
import { Product } from "../models/product.models";

export interface ProductService {
  getAll(): Product[] | Promise<Product[]>;
  update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
  create(dto: CreateProductDto): Product | Promise<Product>;
  findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
}
