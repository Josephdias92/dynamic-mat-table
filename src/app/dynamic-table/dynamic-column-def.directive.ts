import { AfterContentChecked, AfterContentInit, AfterViewInit, ContentChild, ContentChildren, Directive, Input, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { DynamicCellDefDirective } from './dynamic-cell-def.directive';
import { DynamicHeaderCellDefDirective } from './dynamic-header-cell-def.directive';
import { ColDef } from './dynamic-table.component';

@Directive({
  selector: 'dynamic-column-def'
})
export class DynamicColumnDefDirective implements OnInit, AfterContentInit {

  @Input('dynamicColumnDef')
  field: string;

  @Input()
  column: ColDef

  @ContentChild(DynamicCellDefDirective)
  dynamicCellDefDirective!: DynamicCellDefDirective

  @ContentChild(DynamicHeaderCellDefDirective)
  dynamicHeaderCellDefDirective!: DynamicHeaderCellDefDirective;

  constructor() { }
  ngAfterContentInit(): void {
  }

  ngOnInit(): void {
  }

}
