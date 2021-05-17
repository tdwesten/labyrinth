import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { HomeBaseColors } from '../../dto/home-base-colors.enum';

@Component({
  selector: 'home-base',
  templateUrl: './home-base.component.html',
  styleUrls: ['./home-base.component.scss'],
})
export class HomeBaseComponent implements OnInit {
  @HostBinding('style.border-color') borderColor;
  @Input() index = 0;

  constructor() {}

  ngOnInit(): void {
    this.setBorderColor();
  }

  setBorderColor() {
    if (this.index === 0) {
      return (this.borderColor = HomeBaseColors.Red);
    }

    if (this.index === 7) {
      return (this.borderColor = HomeBaseColors.Orange);
    }

    if (this.index === 56) {
      return (this.borderColor = HomeBaseColors.Blue);
    }

    if (this.index === 63) {
      return (this.borderColor = HomeBaseColors.Green);
    }
  }
}
