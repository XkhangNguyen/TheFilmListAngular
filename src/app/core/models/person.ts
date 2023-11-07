import { Movie } from "./movie";

export interface Person{
    id: number,
    name: string,
    imagePath: string,
    biography: string,
    birthday: Date,
    placeOfBirth: string,
    movies: Movie[],
    facebookPath: string,
    instagramPath: string,
    twitterPath: string,
}