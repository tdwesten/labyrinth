import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { TileOrientation } from '../../dto/tile-orientation.enum';
import Tile from '../../dto/tile.dto';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  @Input() config: Tile;
  @Input() index: number;
  @HostBinding('style.background-image') backgroundImage;

  @HostListener('click') onClick() {
    const tile = new Tile();
    this.config.orientation = tile.randomOrientation();
  }

  ngOnInit(): void {
    this.backgroundImage = this.config.backgroundImage;
  }
}
