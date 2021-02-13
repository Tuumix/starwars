import { FiltersTypes } from "../../Types/FilterTypes";

export interface FilterContextProps {
  filter: FiltersTypes;
  setNumericFilter: (column: string, comparison: string, value: string) => void;
  setNameFilter: (value: string) => void;
  removeFilter: (columnName: string) => void;
}