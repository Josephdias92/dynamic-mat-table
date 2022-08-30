export interface ColDef<T = any> {
  field: string;
  type: 'string' | 'number' | 'custom';
  headerName: string;
  hide?: boolean;
  width?: number;
  index?: number;
  editable?: boolean;
  valueGetter?: (param: ValueGetterParam<T>) => any
}
interface ValueGetterParam<T> {
  getValue: (field: string) => any;
}
