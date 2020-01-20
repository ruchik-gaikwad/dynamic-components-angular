import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlace]'
})
export class PlaceDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
