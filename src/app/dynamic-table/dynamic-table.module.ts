import { DragDropModule } from '@angular/cdk/drag-drop';
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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatTableModule,
    CommonModule,
    MatCheckboxModule,
    DragDropModule,
    MatPaginatorModule,
    MatListModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,
    MatSortModule,
  ],
  declarations: [DynamicTableComponent, DynamicTableHeaderComponent],
  exports: [DynamicTableComponent],
})
export class DynamicTableModule {}
