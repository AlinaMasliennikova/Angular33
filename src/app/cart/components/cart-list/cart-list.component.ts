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

    constructor(private cartService: CartService) { }

    onClear() {
        this.cartService.clearItems();
    }

    trackByItems(index: number, item: CartItemModel): string { return `${item.product.id}|${item.quantity}`; }
}
