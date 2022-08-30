import { inject, TemplateRef } from "@angular/core";
import { DynamicCellDefDirective } from "./dynamic-cell-def.directive";

describe('DynamicCellDefDirective', () => {
  it('should create an instance', () => {
    const directive = new DynamicCellDefDirective(inject(TemplateRef));
    expect(directive).toBeTruthy();
  });
});
