import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {



  constructor(private http: HttpClient) { }

  buscarAnime(params: any) {
    return this.http.get(`https://api.jikan.moe/v4/anime`, params);
  }

}
