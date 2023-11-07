import { Person } from "./person";

export interface Movie {
    directors: Person[];
    budget: number,
    revenue: number,
}