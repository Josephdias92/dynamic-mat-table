import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dynamicHeaderCellDef]'
})
export class DynamicHeaderCellDefDirective {

  constructor(public template: TemplateRef<any>) { }

}
