import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    getProducts(): Array<ProductModel> {
        return [
            { id: 1, name: "Video Projector", cost: 100, isAvailable: true },
            { id: 2, name: "Microwave", cost: 50, isAvailable: true },
            { id: 3, name: "Candle", cost: 10, isAvailable: false }
        ];
    }
}
