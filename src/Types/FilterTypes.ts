export interface FiltersTypes {
  filters: Filters;
}

export interface Filters {
  filterByName: FilterByName;
  filterByNumericValues: NumericFilter[];
  order: Order;
}

export interface FilterByName {
  name: string;
}

export interface NumericFilter {
  column: string;
  comparison: string;
  value: string;
}

export interface Order {
  [ key : string ] : string;
  column: string;
  sort: string;
}