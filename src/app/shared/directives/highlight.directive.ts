import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) { }
    
    @HostBinding('class') className: string;
    
    @HostListener('mouseover')
    onMouseOver(): void {
        this.className = 'highlight';
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.className = '';
    }
}
