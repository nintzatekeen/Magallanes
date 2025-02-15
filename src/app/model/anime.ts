import { Relation } from "./relation";

export interface Anime {
    id: number;
    title: string;
    image: string;
    type: string;
    episodes: number;
    status: string;
    airing: boolean;
    score: number;
    from: Date | null;
    to: Date | null;
    relations: Relation[]
    url: string;
    duration: string | null;
}
