export interface FiltersTypes {
  filters: Filters;
}

export interface Filters {
  filterByName: FilterByName;
  filterByNumericValues: NumericFilter[];
}

export interface FilterByName {
  name: string;
}

export interface NumericFilter {
  column: string;
  comparison: string;
  value: string;
}