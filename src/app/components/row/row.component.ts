import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import Tile from '../../dto/tile.dto';

@Component({
  selector: 'row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss'],
})
export class RowComponent implements OnInit {
  constructor() {}

  @Input() tiles: Tile[];
  @Input() index: number;

  ngOnInit(): void {
    console.log(this.tiles);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex, event.currentIndex);

    moveItemInArray(this.tiles, event.previousIndex, event.currentIndex);
  }
}
