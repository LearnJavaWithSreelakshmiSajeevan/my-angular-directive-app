ng new my-angular-directive-app

ng g c sample
Add a title inside SampleComponent
title='Hello Angular';

get to sample componet using interpolation
ng generate directive highlight



import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
Directive: A decorator provided by Angular that marks a class as an Angular directive. A directive can either be an attribute directive (which changes the behavior or appearance of an element) or a structural directive (which changes the DOM layout).

ElementRef: A service that grants direct access to the DOM element. It wraps the native DOM element and is used here to apply styles or manipulate the element.

Renderer2: A service for safely and efficiently manipulating the DOM. Using Renderer2 is preferred over directly accessing the DOM because it helps maintain compatibility across different platforms (like server-side rendering or Web Workers).

HostListener: A decorator that listens to DOM events on the host element. When the event is triggered, it calls a specified method on the directive's class.

constructor(private el: ElementRef, private renderer: Renderer2) {}

el (ElementRef): Injected into the directive, this provides a reference to the host DOM element to which the directive is applied.
renderer (Renderer2): Injected into the directive, this service is used to perform DOM manipulations in a way that is safe and compatible with different rendering environments.

@HostListener('mouseenter') onMouseEnter() {
  this.highlight('yellow');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}
    @HostListener('mouseenter'): This decorator listens for the mouseenter event (when the mouse pointer enters the element). When this event occurs, it calls the onMouseEnter method.
    @HostListener('mouseleave'): This decorator listens for the mouseleave event (when the mouse pointer leaves the element). When this event occurs, it calls the onMouseLeave method.

These methods change the background color of the element to yellow when the mouse enters and clear the background color when the mouse leaves.

private highlight(color: string | null) {
  this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
}
    highlight: A private method that changes the background color of the host element. It uses Renderer2's setStyle method to apply the backgroundColor style to the native DOM element.

    Parameters:
        color: A string representing the color to set, or null to clear the color.

The use of Renderer2 over direct DOM manipulation (like this.el.nativeElement.style.backgroundColor = color) is recommended because it abstracts away the direct DOM manipulation, providing better security and compatibility, especially in environments where direct DOM access is restricted or not available.
