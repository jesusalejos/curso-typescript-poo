import { validate } from "class-validator";
import { UpdateProductDto } from "../dtos/producto.datos";
import { Product } from "../models/product.models";
import { ProductHttpService } from "./product-http2.services";

export class ProductCRUDService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  private http = new ProductHttpService(this.url);

  async update(id: Product['id'], dto: UpdateProductDto) {
    // permisos
    // logica
    // validate(dto)
    return this.http.update(id, dto);
  }
}
