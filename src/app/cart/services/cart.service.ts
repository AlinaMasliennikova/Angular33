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

    getTotalCost(): number {
        return this.items.reduce((totalCost, item) => totalCost + item.product.cost * item.quantity, 0);
    }

    getTotalQuantity(): number {
        return this.items.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    }

    addItem(product: ProductModel): void {
        const item = this.getItem(product);
        if (item) {
            item.quantity++;
        } else {
            this.items.push({ product: product, quantity: 1 });
        }
    }

    increaseQuantity(item: CartItemModel): void {
        const existingItem = this.getItem(item.product);
        if (existingItem) {
            existingItem.quantity++;
        }
    }

    decreaseQuantity(item: CartItemModel): void {
        const existingItem = this.getItem(item.product);
        if (existingItem && existingItem.quantity > 1) {
            existingItem.quantity--;
        }
    }

    deleteItem(item: CartItemModel): void {
        const index = this.items.findIndex(x => x.product.id === item.product.id);
        this.items.splice(index, 1);
    }

    clearItems(): void {
        this.items.length = 0;
    }

    private getItem(product: ProductModel): CartItemModel {
        return this.items.find(x => x.product.id === product.id);;
    }
}
