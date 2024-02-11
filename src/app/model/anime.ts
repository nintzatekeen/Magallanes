export interface Anime {
    id: number;
    title: string;
    image: string;
    type: string;
    episodes: number;
    status: string;
    airing: boolean;
    score: number;
    from: Date;
    to: Date;
}
