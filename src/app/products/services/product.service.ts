import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    getProducts(): Array<ProductModel> {
        return [{ id: 1, name: "Video Projector" }, { id: 2, name: "Microwave" }, { id: 3, name: "Candle" }];
    }
}
