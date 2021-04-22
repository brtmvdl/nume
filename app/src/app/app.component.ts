import { Component, OnInit } from '@angular/core'
import { LocalService } from './services/local.service'

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
  numbers: number[] = [];
  selecteds: number[] = [];

  table = [];
  points = 0;
  max = 0;

  // eslint-disable-next-line no-useless-constructor
  constructor (
    private local: LocalService
  ) {
  }

  get gameMessageStyle (): {} {
    return {
      display: this.playing ? 'none' : 'block'
    }
  }

  ngOnInit (): void {
    this.setMax()
    this.play()
  }

  randomNumber (max: number): number {
    return Math.floor(Math.random() * max)
  }

  hasIn (which: number, list: number[]): boolean {
    return list.some((num: number) => num === which)
  }

  setMax (): void {
    const points = Number.parseInt(this.local.retrieve('points'), 10)
    this.max = points || 0
  }

  makePoints (): void {
    this.points++
    this.max = Math.max(this.max, this.points)
  }

  pushInSelecteds (cell: number): void {
    this.selecteds.push(cell)
  }

  select (cell: number): void {
    if (this.hasIn(cell, this.selecteds)) {
      this.lose()
      return
    }

    this.makePoints()
    this.pushInSelecteds(cell)
    this.makeGame()
  }

  lose (): void {
    this.local.set('points', this.max.toString())
    this.selecteds = []
    this.playing = false
  }

  randomNumbers (lenth: number, max: number): number[] {
    const numbers: number[] = []
    while (lenth--) numbers.push(this.randomNumber(max))
    return numbers
  }

  getNewNumbers (length: number, notIn: number[] = []): number[] {
    const numbers = []

    for (let i = 0; i < length; i++) {
      let num: number

      do num = this.randomNumber(90) + 10
      while (this.hasIn(num, numbers) || this.hasIn(num, notIn))

      numbers.push(num)
    }

    return numbers
  }

  createMap (lines, columns): any[][] {
    return [...Array(lines)].map(() => [...Array(columns)])
  }

  makeTable (lines: number, columns: number, numbers: number[] = []): number[][] {
    const table = this.createMap(lines, columns)
    let n = 0

    for (let l = 0; l < lines; l++) {
      for (let c = 0; c < columns; c++) { table[l][c] = numbers[n++] }
    }

    return table
  }

  randomizeNumbers (numbers: number[]): number[] {
    return numbers
      .sort(() => Math.floor(Math.random() * 3) - 1)
      .sort(() => Math.floor(Math.random() * 3) - 1)
  }

  randomizeAndFilter (list: number[], length: number): number[] {
    return this.randomizeNumbers(list)
      .filter((_, ix) => ix < length)
  }

  getGameNumbers (length: number, selectedsLength: number): number[] {
    const { selecteds } = this
    const filteredSelecteds = this.randomizeAndFilter(selecteds, selectedsLength)
    const newNumbers = this.getNewNumbers(length - filteredSelecteds.length, selecteds)
    const numbers = this.randomizeNumbers(newNumbers.concat(filteredSelecteds))

    return numbers
  }

  makeGame (): void {
    const {
      LINES_NUMBER: lines,
      COLUMNS_NUMBER: cols,
      SELECTED_NUMBERS: selecteds
    } = this

    this.numbers = this.getGameNumbers(lines * cols, selecteds)
    this.table = this.makeTable(lines, cols, this.numbers)
  }

  play (): void {
    this.makeGame()
    this.points = 0
    this.playing = true
  }
}
