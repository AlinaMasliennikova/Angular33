import { Component, OnInit } from '@angular/core';

import { Category } from '../../models/enums/category';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {
    name: string;
    description: string;
    price: number;
    categories: Array<Category>;
    isAvailable: boolean;

    constructor() { }

    ngOnInit(): void {
        this.name = "Test Product";
        this.description = "Product Description";
        this.price = 100;
        this.categories = [Category.Electronics, Category.Home];
        this.isAvailable = true;
    }

    getCategoryName(category: Category): string {
        return Category[category];
    }
}
