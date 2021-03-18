import { Component, OnInit } from '@angular/core';
import { LocalService } from './services/local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  LINES_NUMBER = 4;
  COLUMNS_NUMBER = 4;
  SELECTED_NUMBERS = 4;

  playing = false;

  x: number;
  // numbers: number[] = [];
  selecteds: number[] = [];

  table = [];
  points = 0;
  max = 0;

  constructor(
    private local: LocalService,
  ) {
  }

  get gameMessageStyle(): {} {
    return {
      display: this.playing ? 'none' : 'block',
    }
  }

  ngOnInit(): void {
    this.setMax();
    this.play();
  }

  randomNumber(to: number): number {
    return Math.floor(Math.random() * to);
  }

  hasIn(which: number, list: number[]): boolean {
    return list.some((num: number) => num === which);
  }

  setMax(): void {
    const points = Number.parseInt(this.local.retrieve('points'), 10);
    if (points) {
      this.max = points;
    } else {
      this.max = 0;
    }
  }

  makePoints(): void {
    this.points++;
    if (this.points > this.max) {
      this.max = this.points;
    }
  }

  pushInSelecteds(cell: number): void {
    this.selecteds.push(cell);
  }

  select(cell: number): void {
    if (this.hasIn(cell, this.selecteds)) {
      this.lose();
      return;
    }

    this.makePoints();
    this.pushInSelecteds(cell);
    this.makeGame();
  }

  lose(): void {
    this.local.set('points', this.max.toString());
    this.selecteds = [];
    this.playing = false;
  }

  makeNewNumbers(howManyNew: number): number[] {
    const newNumbers = [];

    for (let i = 0; i < howManyNew; i++) {
      let cell: number;

      do {
        cell = this.randomNumber(90) + 10;
      } while (
        this.hasIn(cell, newNumbers) ||
        this.hasIn(cell, this.selecteds)
      );

      newNumbers.push(cell);
    }

    return newNumbers;
  }

  makeTable(numbers: number[]): number[][] {
    const table = [...Array(this.LINES_NUMBER)].map(() => [...Array(this.COLUMNS_NUMBER)]);

    for (let n = 0; n < numbers.length; n++) {
      let line, col;

      do {
        line = this.randomNumber(this.LINES_NUMBER);
        col = this.randomNumber(this.COLUMNS_NUMBER);
      } while (table[line][col]);

      table[line][col] = numbers[n];
    }

    return table;
  }

  randomizeNumbers(numbers: number[]): number[] {
    return numbers
      .sort(() => Math.floor(Math.random() * 3) - 1)
      .sort(() => Math.floor(Math.random() * 3) - 1)
  }

  makeNumbers(): number[] {
    const selecteds = this.randomizeNumbers(this.selecteds)
      .filter((_, ix) => ix < this.SELECTED_NUMBERS)

    const totalCels = this.LINES_NUMBER * this.COLUMNS_NUMBER
    const numbers = this.makeNewNumbers(totalCels - selecteds.length);
    return this.randomizeNumbers(numbers.concat(selecteds))
  }

  makeGame(): void {
    this.table = this.makeTable(this.makeNumbers());
  }

  play(): void {
    this.makeGame();
    this.points = 0;
    this.playing = true;
  }

}
