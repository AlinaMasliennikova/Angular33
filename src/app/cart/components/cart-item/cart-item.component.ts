import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CartItemModel } from '../../models';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
    @Input() item: CartItemModel;

    @Output() increaseQuantity = new EventEmitter<CartItemModel>();
    @Output() decreaseQuantity = new EventEmitter<CartItemModel>();
    @Output() deleteItem = new EventEmitter<CartItemModel>();

    onQuantityIncrease(): void {
        this.increaseQuantity.emit(this.item);
    }

    onQuantityDecrease(): void {
        this.decreaseQuantity.emit(this.item);
    }

    onDeleteItem(): void {
        this.deleteItem.emit(this.item);
    }
}
