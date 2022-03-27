import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { FirstComponent } from './components/first/first.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const components = [
    FirstComponent,
    ProductComponent,
    ProductListComponent,
];

@NgModule({
    declarations: [
        ...components,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    exports: [
        ...components,
    ]
})
export class ProductsModule { }
