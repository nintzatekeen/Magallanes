import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anime } from '../model/anime';
import { Relation } from '../model/relation';
import { Utilidades } from '../utils/utilidades';
import { RelationEntry } from '../model/relation_entry';
import { UtilBD } from '../utils/util_bd';
import { ControladorBusqueda } from '../model/controlador_busqueda';
import { TranslateService } from '@ngx-translate/core';

export const API_URL = "https://api.jikan.moe/v4";

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  baseDeDatos: any;

  obtenidos!: Map<number, RelationEntry>;

  constructor(private http: HttpClient, private translate: TranslateService) {
    this.obtenidos = new Map<number, RelationEntry>();
  }

  buscarAnime(params: any) {
    return this.http.get(`${API_URL}/anime`, {params: params});
  }

  obtenerAnimeCompleto(id: number) {
    return this.http.get(`${API_URL}/anime/${id}/full`);
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
      duration: raw.duration ?? null,
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

  async consulta(id:number | undefined) {
    return new Promise<Anime>((resolve, reject) => {
      try {
        if (this.baseDeDatos && id) {
          this.baseDeDatos
          .transaction("animes")
          .objectStore("animes")
          .get(id).onsuccess = (event: any) => {
            let wea = event?.target?.result;
            resolve(wea);
          };
        } else {
          reject();
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  async guardar(anime: Anime) {
    return new Promise<void>((resolve, reject) => {
      try {
        if (this.baseDeDatos) {
          let transaction = this.baseDeDatos.transaction(["animes"], "readwrite");
          transaction.objectStore("animes").put(anime);
          resolve();
        } else {
          reject();
        }
      } catch (error) {
        reject(); 
      }
    });
  }

  async sagase(entry: RelationEntry, omisiones: string[], lista: Anime[], controlador: ControladorBusqueda) {
    let id = entry.mal_id;

    if (!this.baseDeDatos) {
      this.baseDeDatos = await UtilBD.getBaseDeDatos();
    }

    let anime = await this.consulta(id);
    if (anime) {
      return new Promise<void>(async (resolve, reject) => {
        try {
          await this.manejarAnime(anime, omisiones, lista, controlador);
          resolve();
        } catch (error) {
          reject(error);
        }
      });

    } else {
      return new Promise<void>((resolve, reject) => setTimeout(async () => {
        this.obtenerAnimeCompleto(id).subscribe({
          next: async (raw: any) => {

            if (controlador && controlador.cancelar) {
              reject(this.translate.instant("busqueda_cancelada"));
            } else {
              let anime: Anime = this.mapearAnime(raw?.data);
              if (anime) {
                if (anime?.status?.toUpperCase() == "FINISHED AIRING") {
                  this.guardar(anime);
                }
                try {
                  await this.manejarAnime(anime, omisiones, lista, controlador);
                  resolve();
                } catch (error) {
                  reject(error);
                }
              } else {
                reject();
              }
            }
          },
          error: (error) => {reject(error)}
        });
    }, 1000));
    }
  }

  async manejarAnime(anime: any, omisiones: string[], lista: Anime[], controlador: ControladorBusqueda) {
    lista.push(anime);
    controlador.alAnadir(anime);
    lista.sort(Utilidades.comparador);
    let relaciones = anime.relations;
    let nuevasRelaciones = this.anadirRelaciones(relaciones, omisiones);
    for await (let nuevaRelacion of nuevasRelaciones) {
      await this.sagase(nuevaRelacion, omisiones, lista, controlador);
    }
  }

}
