import { DropItem } from "../../components/DropDown/types";
import { FiltersTypes } from "../../Types/FilterTypes";

export interface FilterContextProps {
  filter: FiltersTypes;
  columns: DropItem[];
  comparisons: DropItem[];
  value: string;
  selectedColumn: string;
  selectedComparison: string;
  // setNumericFilter: (column: string, comparison: string, value: string) => void;
  setNameFilter: (value: string) => void;
  removeFilter: (columnName: string) => void;
  addFilter: (columnName: string) => void;
  setColumn: (columnName: string) => void;
  setComparison: (comparison: string) => void;
  setNome: (value: string) => void; //TODO
}