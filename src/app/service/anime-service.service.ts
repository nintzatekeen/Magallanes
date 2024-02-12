import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from '../model/anime';

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {



  constructor(private http: HttpClient) { }

  buscarAnime(params: any) {
    return this.http.get(`https://api.jikan.moe/v4/anime`, {params: params});
  }

  obtenerAnimeCompleto(id: number) {
    return this.http.get(`https://api.jikan.moe/v4/anime/${id}/full`);
  }

  mapearAnime(raw: any): Anime {
    return {
      id: raw.mal_id,
      title: raw.title,
      image: raw.images?.jpg?.image_url,
      type: raw.type,
      episodes: raw.episodes,
      status: raw.status,
      airing: raw.airing,
      score: raw.score,
      from: raw.aired?.from ? new Date(raw.aired?.from) : null,
      to: raw.aired?.to ? new Date(raw.aired?.to) : null,
      relations: raw.relations ?? []
    }
  }

}
