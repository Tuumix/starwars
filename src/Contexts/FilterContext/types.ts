import { FiltersTypes } from "../../Types/FilterTypes";

export interface FilterContextProps {
  filters: FiltersTypes;
  setNumericFilter: (column: string, comparison: string, value: string) => void;
  setNameFilter: (value: string) => void;
}