import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ProductModel } from '../../models';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})
export class ProductComponent {
    @Input() product: ProductModel;

    @Output() addProduct = new EventEmitter<ProductModel>();

    onAddToCart(): void {
        this.addProduct.emit(this.product);
        console.log(`Buy '${this.product.name}'`);
    }
}
