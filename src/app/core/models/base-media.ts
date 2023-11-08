import { Person } from "./person";

export interface BaseMedia {
    id: number;
    title: string;
    overview: string;
    releaseDate: Date;
    posterPath: string;
    voteAverage: number;
    genreIds: number[];
    actors: Person[],
}