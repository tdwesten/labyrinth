import { TileOrientation } from './tile-orientation.enum';
import { TileType } from './tile-type.enum';

export default class Tile {
  orientation: TileOrientation;
  type: TileType;
  index: number = 0;
  position: [number, number];
  width: number;
  fixed: Boolean = true;

  constructor(index: number = 0) {
    this.generateTile(index);
  }

  get backgroundImage() {
    return `url('assets/images/${this.type}.svg')`;
  }

  generateTile(index: number): Tile {
    this.orientation = this.randomOrientation();
    this.type = this.randomType();
    this.index = index;

    return this;
  }

  calculatePosition(index: number, boardHeight: number, boardWidth: number, numberOfTiles: number): [number, number] {
    const tilesByRow = 8;
    const tileWidth = boardWidth / tilesByRow;
    const tileHeight = boardWidth / tilesByRow;
    const offsetX = tileWidth * (index % 8) + 3;
    const offsetY = tileHeight * Math.floor(index / 8) + 3;

    this.width = tileWidth - 2;

    return [offsetX, offsetY];
  }

  randomOrientation(): TileOrientation {
    return this.getRandomEnum(TileOrientation);
  }

  randomType(): TileType {
    return this.getRandomEnum(TileType);
  }

  private getRandomEnum(Enum) {
    const optionCount: number = Object.keys(Enum).length / 2;
    const options: string[] = Object.keys(Enum).filter((v) => !isNaN(Number(v)));
    const optionKey = Math.floor(Math.random() * optionCount);

    return Enum[options[optionKey]];
  }
}
