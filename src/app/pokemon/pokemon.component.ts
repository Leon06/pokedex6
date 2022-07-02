import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name!: string;
  urlPokemon!: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    //
  }

  buscar(){
    this.pokemonService.obtenerPokemon(this.name).subscribe((data:any) => {
      this.urlPokemon = data.sprites.front_default
    })
  }


}
