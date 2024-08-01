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
