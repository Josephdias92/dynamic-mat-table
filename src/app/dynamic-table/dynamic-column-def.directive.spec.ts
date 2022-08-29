import { inject, TemplateRef } from '@angular/core';
import { DynamicColumnDefDirective } from './dynamic-column-def.directive';

describe('DynamicColumnDefDirective', () => {
  it('should create an instance', () => {
    const directive = new DynamicColumnDefDirective(inject(TemplateRef));
    expect(directive).toBeTruthy();
  });
});
