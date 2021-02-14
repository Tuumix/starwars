export interface FilterInfoProps {
  column: string, 
  comparison: string, 
  value: string,
  callback: (columnName: string) => void;
}