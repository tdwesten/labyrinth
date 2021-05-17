import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { TileComponent } from './components/tile/tile.component';
import { HomeBaseComponent } from './components/home-base/home-base.component';
import { RowComponent } from './components/row/row.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, BoardComponent, TileComponent, HomeBaseComponent, RowComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
