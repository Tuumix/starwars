import { FiltersTypes } from "../../types/FilterTypes";

export interface FilterContextProps {
  filter: FiltersTypes;
  setNumericFilter: (selectedColumn: string, selectedComparison: string, length: string) => void;
  setNameFilter: (columnName: string) => void;
  removeFilter: (columnName: string) => void;
  setOrderBy: (columnName: string, order: string) => void;
}
