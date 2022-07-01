import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string ="https://pokeapi.co/api/v2/pokemon/ditto";

  constructor(private http: HttpClient) { }

  obtenerPokemon(value: string){
    return this.http.get(`${this.url}/${value}`)
  }
}
