import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DynamicTableModule } from './dynamic-table/dynamic-table.module';

@NgModule({
  imports: [BrowserModule, DynamicTableModule, BrowserAnimationsModule, CommonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
