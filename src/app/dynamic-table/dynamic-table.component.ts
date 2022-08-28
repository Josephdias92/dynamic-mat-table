import { SelectionModel } from '@angular/cdk/collections';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
export interface ColDef {
  field: string;
  type: string;
  header: string;
  hide?: boolean;
  width?: number;
  index?: number;
}
@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent<T> implements AfterViewInit {
  @ViewChild(MatTable, { read: ElementRef }) private matTableRef: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  _displayedColumns: string[] = [];
  get displayedColumns() {
    return [...this._rowSelection, ...this._filteredDisplayedColumns];
  }

  selection: SelectionModel<T>;
  private _filteredDisplayedColumns = [];
  private _rowSelection = [];
  @Input()
  set columns(c: ColDef[]) {
    this._filteredDisplayedColumns = c
      .filter((e) => !e.hide)
      .map((e) => e.field);
    this._columns = c;
  }

  get columns() {
    return this._columns;
  }

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
  _rowSelectionMode: 'single' | 'multi' | 'none' = 'none';

  private _columns: ColDef[];

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

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor() {}
}
