export interface DropDownProps {
  dropList: DropItem[];
  value: string;
  handleChange: (value: string) => void;
}

export interface DropItem {
  id: number;
  name: string;
  available: boolean;
}

