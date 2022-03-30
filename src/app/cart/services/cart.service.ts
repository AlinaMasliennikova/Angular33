import { Injectable } from '@angular/core';

import { ProductModel } from 'src/app/products/models/product.model';
import { CartItemModel } from '../models';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    private items: Array<CartItemModel> = [];

    getItems(): Array<CartItemModel>{
        return this.items;
    }

    addItem(product: ProductModel): void {
        const item = this.items.find(x => x.product.id == product.id);
        if (item) {
            // мутация
            item.quantity++;
        } else {
            // мутация
            this.items.push({ product: product, quantity: 1 });
        }
    }

    clearItems(): void {
        // а тут уже пересоздание массива,
        // желательно придерживаться какой-то одной стратегии
        // если мутация, тогда this.items.length = 0;
        this.items = [];
    }
}
