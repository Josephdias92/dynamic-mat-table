import { DragDropModule } from '@angular/cdk/drag-drop';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicTableHeaderComponent } from './dynamic-table-header/dynamic-table-header.component';
import { DynamicTableComponent } from './dynamic-table.component';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicColumnDefDirective } from './selectors/dynamic-column-def.directive';
import { DynamicCellDefDirective } from './selectors/dynamic-cell-def.directive';
import { DynamicHeaderCellDefDirective } from './selectors/dynamic-header-cell-def.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCheckboxModule,
    DragDropModule,
    MatPaginatorModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
    OverlayModule
  ],
  declarations: [DynamicTableComponent, DynamicTableHeaderComponent, DynamicColumnDefDirective, DynamicCellDefDirective, DynamicHeaderCellDefDirective],
  exports: [DynamicTableComponent, DynamicColumnDefDirective, DynamicTableHeaderComponent, DynamicCellDefDirective, DynamicHeaderCellDefDirective],
})
export class DynamicTableModule {}

