import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';

import { ProductModel } from '../../models';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products: Array<ProductModel>;

    constructor(private productService: ProductService, private cartService: CartService) { }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
    }

    onAddProduct(product: ProductModel): void {
        this.cartService.addItem(product);
    }
}
