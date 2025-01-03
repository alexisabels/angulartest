import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [CommonModule],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <p>Haz click para marcar uno como favorito</p>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="fav(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  @Input() username = 'alex';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    { id: 1, name: 'Uncharted 4' },
    { id: 2, name: 'The Last of Us' },
    { id: 3, name: 'God of War' },
    { id: 4, name: 'Spiderman' },
  ];
}
