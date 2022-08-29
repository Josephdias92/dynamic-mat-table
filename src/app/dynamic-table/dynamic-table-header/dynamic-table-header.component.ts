import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from '../dynamic-table.component';

@Component({
  selector: 'dynamic-table-header',
  templateUrl: './dynamic-table-header.component.html',
  styleUrls: ['./dynamic-table-header.component.scss']
})
export class DynamicTableHeaderComponent implements OnInit {

  @Input()
  column: ColDef;

  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

}