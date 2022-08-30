import { ContentChild, Directive, Input } from '@angular/core';
import { ColDef } from "../models/col-def";
import { DynamicCellDefDirective } from './dynamic-cell-def.directive';
import { DynamicHeaderCellDefDirective } from './dynamic-header-cell-def.directive';

@Directive({
  selector: 'dynamic-column-def'
})
export class DynamicColumnDefDirective {

  @Input('dynamicColumnDef')
  field: string;

  column: ColDef = {} as ColDef;

  @ContentChild(DynamicCellDefDirective)
  dynamicCellDefDirective!: DynamicCellDefDirective;

  @ContentChild(DynamicHeaderCellDefDirective)
  dynamicHeaderCellDefDirective!: DynamicHeaderCellDefDirective;

}
