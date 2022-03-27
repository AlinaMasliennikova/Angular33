import { ProductModel } from "src/app/products/models";

export interface CartItemModel {
    product: ProductModel;
    quantity: number;
}
