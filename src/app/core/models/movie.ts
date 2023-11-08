import { BaseMedia } from "./base-media";
import { Person } from "./person";

export interface Movie extends BaseMedia {
    releaseDate: Date;
    directors: Person[];
    budget: number,
    revenue: number,
}