import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[dynamicCellDef]'
})
export class DynamicCellDefDirective {

  constructor(public template: TemplateRef<any>) { }

}
