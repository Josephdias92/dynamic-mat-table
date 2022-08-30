import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ColDef } from './models/col-def';
import { DynamicColumnDefDirective } from './selectors/dynamic-column-def.directive';
@Component({
  selector: 'dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent<T> implements AfterViewInit {
  @ViewChild(MatTable, { read: ElementRef }) private matTableRef: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ContentChildren(DynamicColumnDefDirective) columnDefs!: QueryList<DynamicColumnDefDirective>;

  get displayedColumns() {
    return [...this._rowSelection, ...this._filteredDisplayedColumns];
  }
  _displayedColumns: string[] = [];

  selection: SelectionModel<T>;

  @Input()
  set columns(c: ColDef[]) {

    this._filteredDisplayedColumns = c
      .filter((e) => !e.hide)
      .map((e) => e.field);
    const filteredList = []
    c.forEach(e => {
      this._fieldToColumnMap.set(e.field, e);
      if (e.type !== 'custom') {
        filteredList.push(e);
      }
    })
    this._columns = filteredList;
  }

  get columns() {
    return this._columns;
  }
  private _columns: ColDef[];


  @Input()
  dataSource: MatTableDataSource<T>;

  @Input()
  set rowSelectionMode(mode) {
    this._rowSelectionMode = mode;
    if (mode === 'none') {
      this._rowSelection = [];
      return;
    }
    this.selection = new SelectionModel<T>(mode === 'multi', []);
    this._rowSelection = ['select'];
  }
  get rowSelectionMode() {
    return this._rowSelectionMode;
  }
  private _rowSelectionMode: 'single' | 'multi' | 'none' = 'none';

  private _filteredDisplayedColumns = [];
  private _rowSelection = [];
  private _fieldToColumnMap = new Map<string, ColDef>([]);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this._filteredDisplayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.columnDefs.map(col => {
      col.column = this.getColumnByField(col.field);
    })
  }

  getColumnByField(field) {
    return this._fieldToColumnMap.get(field);
  }
}
