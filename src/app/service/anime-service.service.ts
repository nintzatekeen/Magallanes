import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from '../model/anime';
import { Relation } from '../model/relation';
import { Utilidades } from '../utils/utilidades';
import { RelationEntry } from '../model/relation_entry';



@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  obtenidos!: Map<number, RelationEntry>;

  constructor(private http: HttpClient) {
    this.obtenidos = new Map<number, RelationEntry>();
  }

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
      relations: raw.relations ?? [],
      url: raw.url,
    }
  }


  anadirRelaciones(relaciones: Relation[], omisiones: string[]) {
    let nuevasRelaciones: RelationEntry[] = [];
    if (relaciones) {
        let omitidos = ["Adaptation"];
        omitidos.push(...omisiones);

        relaciones.filter(r => !omitidos.includes(r.relation)).forEach(rel => {
            for (let entry of rel?.entry ?? []) {
                if (Utilidades.validarRelacion(entry) && entry.type === "anime" && !this.obtenidos.has(entry.mal_id)) {
                  this.obtenidos.set(entry.mal_id, entry);
                  nuevasRelaciones.push(entry);
                }
            }
        });
    }
    return nuevasRelaciones;
  }

  async sagase(entry: RelationEntry, omisiones: string[], lista: Anime[]) {
    return new Promise<void>((resolve, reject) => setTimeout(async () => {
        try {
            let id = entry.mal_id;
            this.obtenerAnimeCompleto(id).subscribe(async (raw: any) => {
              let anime: Anime = this.mapearAnime(raw?.data);
              if (anime) {
                lista.push(anime);
                lista.sort(Utilidades.comparador);
                let relaciones = anime.relations;
                let nuevasRelaciones = this.anadirRelaciones(relaciones, omisiones);
                for await (let nuevaRelacion of nuevasRelaciones) {
                  await this.sagase(nuevaRelacion, omisiones, lista);
                }
                resolve();
              }
            });
        } catch (error) {
            reject(error);
        }
    }, 1000));
}
}
