export interface TableProps {
    data: DataProps[];
}

export interface DataProps {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    population: string;
    surface_water: string;
    films: Array<string>;
    created: string;
    edited: string;
    url: string;
}