import { Component } from '@angular/core';
import Tile from './dto/tile.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  playTile: Tile;

  constructor() {
    this.generatePlaytile();
  }

  generatePlaytile() {
    this.playTile = new Tile();
  }
}
