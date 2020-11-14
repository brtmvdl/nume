import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  playing = false;

  x: number;
  // numbers: number[] = [];
  selecteds: number[] = [];

  table = [];
  points = 0;
  max = 0;

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
    const points = Number.parseInt(window.localStorage.getItem('points'), 10);
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
    window.localStorage.setItem('points', this.max.toString());
    this.selecteds = [];
    this.playing = false;
    console.log('lose');
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
    const lineNumber = Math.ceil(numbers.length / 4 + 1);
    const table = [...Array(lineNumber)].map(() => [...Array(4)]);

    for (let n = 0; n < numbers.length; n++) {
      let line, col;

      do {
        line = this.randomNumber(lineNumber);
        col = this.randomNumber(4);
      } while (table[line][col]);

      table[line][col] = numbers[n];
    }

    return table;
  }

  makeGame(): void {
    const newNumbers = this.makeNewNumbers(this.randomNumber(3) + 3);

    const numbers = this.selecteds // get selecteds
      .concat(newNumbers) // join new numbers
      .sort(() => Math.floor(Math.random() * 3) - 1)  // randomize
      .sort(() => Math.floor(Math.random() * 3) - 1); // randomize again

    this.table = this.makeTable(numbers);
  }

  play(): void {
    this.makeGame();
    this.points = 0;
    this.playing = true;
  }

}
