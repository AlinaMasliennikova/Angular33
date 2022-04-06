import { Component } from '@angular/core';

import { CartItemModel } from '../../models';
import { CartService } from '../../services/cart.service';

@Component({
    selector: 'app-cart-list',
    templateUrl: './cart-list.component.html',
    styleUrls: ['./cart-list.component.css']
})
export class CartListComponent {
    get items(): Array<CartItemModel> {
        return this.cartService.getItems();
    }

    get totalQuantity(): number {
        return this.cartService.getTotalQuantity();
    }

    get totalCost(): number {
        return this.cartService.getTotalCost();
    }

    constructor(private cartService: CartService) { }

    onIncreaseQuantity(item: CartItemModel): void {
        this.cartService.increaseQuantity(item);
    }

    onDecreaseQuantity(item: CartItemModel): void {
        this.cartService.decreaseQuantity(item);
    }

    onDeleteItem(item: CartItemModel): void {
        this.cartService.deleteItem(item);
    }

    onClear() {
        this.cartService.clearItems();
    }

    trackByItems(index: number, item: CartItemModel): string { return `${item.product.id}|${item.quantity}`; }
}
