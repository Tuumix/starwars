export interface TableContextProps {
  data: DataProps[];
  keys: string[];
  fetchData: () => void;
  loadPage: (page: number) => void;
}

export interface DataProps {
  [ key : string ] : string | string[];
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  surface_water: string;
  films: string[];
  created: string;
  edited: string;
  url: string;
}
