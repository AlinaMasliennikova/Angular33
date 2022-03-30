import { Component, Input } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: ProductModel;

    // тут не нужно внедрять зависимость,
    // компонент получил данные от родителя,
    // значить надо сформировать output
    constructor(private cartService: CartService) { }

    onAddToCart(): void {
        this.cartService.addItem(this.product);
        console.log(`Buy '${this.product.name}'`);
    }
}
