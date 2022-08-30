import { inject, TemplateRef } from '@angular/core';
import { DynamicHeaderCellDefDirective } from './dynamic-header-cell-def.directive';

describe('DynamicHeaderCellDefDirective', () => {
  it('should create an instance', () => {
    const directive = new DynamicHeaderCellDefDirective(inject(TemplateRef));
    expect(directive).toBeTruthy();
  });
});
