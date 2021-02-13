import { DropItem } from "../../components/DropDown/types";
import { FiltersTypes } from "../../Types/FilterTypes";

export interface FilterContextProps {
  filter: FiltersTypes;
  columns: DropItem[];
  comparisons: DropItem[];
  value: string;
  selectedColumn: string;
  selectedComparison: string;
  setNameFilter: (columnName: string) => void;
  removeFilter: (columnName: string) => void;
  addFilter: (length: string) => void;
  setColumn: (columnName: string) => void;
  setComparison: (comparison: string) => void;
}