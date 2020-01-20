import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlace2]'
})
export class Place2Directive {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
