import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  value!: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.pokemonService.obtenerPokemon(this.value).subscribe(data =>{
      console.log(data)
    })
  }


}
