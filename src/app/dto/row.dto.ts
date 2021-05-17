import { RowAxis } from './row-axis.enum';
import Tile from './tile.dto';

export default class Row {
  axis: RowAxis = RowAxis.Horizontal;
  tiles: Tile[] = [];
  allowDrop: Boolean = false;
}
