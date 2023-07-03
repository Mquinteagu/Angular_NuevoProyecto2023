import { Component } from '@angular/core';
import { MoviesSeries } from 'src/app/types/moviesSeries';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  movies_series : MoviesSeries[] = [
    {
      id: 1, 
      name: "Spider-Man: Cruzando el Multiverso",
      description: "Miles Morales regresa para una aventura épica que transportará al amigable vecino de Brooklyn Spider-Man a través del Multiverso para unir fuerzas con Gwen Stacy y un nuevo equipo de Spider-People.",
      image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/qqXTerrQYwg9pIMhb1GFbxa3WUz.jpg",
      rating: "86%",
      category:"Movie"
    },
    {
      id: 2, 
      name: "The Witcher",
      description: "Geralt, un brujo que se dedica a cazar monstruos genéticamente modificados, busca su lugar en un mundo donde a menudo los humanos demuestran ser peores que las bestias.",
      image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/gh0fdOc2OleDCBjBR1dsQGK490I.jpg",
      rating: "82%",
      category:"Serie"
    },
    {
      id: 3, 
      name: "Indiana Jones y el dial del destino",
      description: "Quinta entrega de la saga 'Indiana Jones'.",
      image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/3Sj5ubQ0BLXd6JuECq52Ira8Oor.jpg",
      rating: "65%",
      category:"Movie"
    },
    {
      id: 4, 
      name: "Súper Mario Bros. La película",
      description: "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico.",
      image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/zNKs1T0VZuJiVuhuL5GSCNkGdxf.jpg",
      rating: "78%",
      category:"Movie"
    },
    {
      id: 5, 
      name: "Juego de tronos",
      description: "En una tierra donde los veranos duran décadas y los inviernos pueden durar toda una vida, los problemas acechan.",
      image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z9gCSwIObDOD2BEtmUwfasar3xs.jpg",
      rating: "84%",
      category:"Serie"
    },
    {
      id: 6, 
      name: "Jigokuraku",
      description: "Gabimaru es un ninja de la villa de la piedra condenado a muerte y sometido a varias torturas que, al igual que el resto de sus camaradas, no puede morir.",
      image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hYHXIqdi8bmbU7oZqgu9GW8hm8j.jpg",
      rating: "80%",
      category:"Serie"
    },
    {
      id: 7, 
      name: "Guardianes de la Galaxia: Volumen 3",
      description: "Star-Lord, todavía recuperándose de la pérdida de Gamora, debe reunir a su equipo para defender el universo junto con la protección de uno de los suyos.",
      image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/6GkKzdNosVAL7UGgwTtCHSxLQ67.jpg",
      rating: "81%",
      category:"Movie"
    },
    {
      id: 8, 
      name: "Black Clover: La espada del rey mago",
      description: "En un mundo donde la magia lo es todo, Asta, un niño que nació sin magia, aspira a convertirse en el Rey Mago, para superar la adversidad, demostrar su poder y mantener el juramento con sus amigos.",
      image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/jm2BckEhy1upr4iPpOZ6WTx1tWw.jpg",
      rating: "85%",
      category: 'Movie'
    }
  ];

  movieFilter: MoviesSeries[] = [];
  movieResult: MoviesSeries[] = [];
  filter: string = 'Todos';
  toSearch: string = '';
  
  ngOnInit(): void {
    this.movieResult = this.movieFilter = this.movies_series;
  }

  search(text: string) {
    console.log(text);
    this.movieResult = [];
    if (text.length) {
      this.movieFilter.forEach((data) => {
        if (data.name?.toLowerCase().includes(text.toLowerCase()))
        this.movieResult.push(data);
      });
    } else this.movieResult =this.movieFilter;
  }

  changeFilter(value: string) {
    this.toSearch = '';
    this.filter = value;
    if (value.length === 0) this.movieFilter = this.movies_series;
    else {
      this.movieFilter = this.movies_series.filter(
        (item) => item.category === value
      );
    }
    this.movieResult = this.movieFilter
    console.log(this.movieResult);
  }
  
  //changeFilter = (filtro: 'Todos' | 'Peliculas' | 'Series') => {
    //this.filter = filtro;
  //};
  
} 

