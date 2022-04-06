import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';

const directives = [HighlightDirective]

@NgModule({
    declarations: [...directives],
    imports: [
        CommonModule
    ],
    exports: [...directives]
})
export class SharedModule { }
