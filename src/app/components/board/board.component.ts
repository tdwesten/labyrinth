import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import Row from '../../dto/row.dto';
import Tile from '../../dto/tile.dto';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  tiles: Tile[] = [];
  rows: Row[] = [];
  private numberOfTiles: number = 8;
  private numberOfRows: number = 8;

  constructor() {
    this.generateRows();
  }

  generateTiles() {
    const tiles = [];

    for (let index = 0; index < this.numberOfTiles; index++) {
      tiles.push(new Tile(index));
    }

    return tiles;
  }

  generateRows() {
    for (let index = 0; index < this.numberOfRows; index++) {
      const row = new Row();

      row.tiles = this.generateTiles();
      this.rows.push(row);
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex, event.currentIndex);

    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }
  ngOnInit(): void {}
}
