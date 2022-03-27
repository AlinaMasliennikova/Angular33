import { Component, Input } from '@angular/core';

import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    @Input() product: ProductModel;

    constructor(private cartService: CartService) { }

    onAddToCart(): void {
        this.cartService.addItem(this.product);
        console.log(`Buy '${this.product.name}'`);
    }
}
