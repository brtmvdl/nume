
class nTag {
  container = document.createElement('div')
  element = document.createElement('div')

  options = {
    element: {
      tagName: 'div',
    },
    container: {
      tagName: 'div',
    },
    component: {
      name: 'bug',
    }
  }

  constructor(options) {
    this.options = {
      ...this.options,
      ...options,
    }

    this.build()
  }

  build() {
    if (this.options.element.tagName) {
      this.element = document.createElement(this.options.element.tagName)
    }

    if (this.options.container.tagName) {
      this.container = document.createElement(this.options.container.tagName)
    }

    if (this.options.component.name) {
      this.element.classList.add(`el-${this.options.component.name}`)
      this.container.classList.add(`ct-${this.options.component.name}`)
    }

    this.setStyle('margin', '0')
    this.setStyle('padding', '0')
    this.setStyle('outline', 'none')
    this.setStyle('border', 'none')
  }

  static fromElement(el = document.createElement('')) {
    const bug = new nTag()
    bug.element = el
    return bug
  }

  static fromId(id) {
    return nTag.fromElement(document.getElementById(id))
  }

  setContainerStyle(name, value) {
    this.container.style[name] = value
    return this
  }

  setStyle(name, value) {
    this.element.style[name] = value
    return this
  }

  getStyle(name) {
    return this.element.style[name]
  }

  setText(text) {
    this.element.innerText = text
    return this
  }

  getText() {
    return this.element.innerText
  }

  on(name, value) {
    this.element.addEventListener(name, value)
    return this
  }

  setData(name, value) {
    this.element.dataset[name] = value
    return this
  }

  getData(name) {
    return this.element.dataset[name]
  }

  clear() {
    while(this.element.children.length > 0) {
      this.element.children.item(0).remove()
    }

    return this
  }

  append(bug = new nTag()) {
    this.element.append(bug.render())
    return this
  }

  render() {
    this.container.append(this.element)
    return this.container
  }
}

class nMarginAuto extends nTag {
  constructor() {
    super({
      component: { name: 'margin-auto' },
    })

    this.setStyle('width', '40rem')
    this.setStyle('margin', '0 auto')
  }
}

class nH1 extends nTag {
  constructor() {
    super({
      component: { name: 'h1' },
    })

    this.setStyle('font-weight', 'bold')
    this.setStyle('font-size', '3rem')
  }
}

class nText extends nTag {
  constructor() {
    super({
      element: { tagName: 'p' },
      component: { name: 'text' },
    })
  }
}

class nNumber extends nTag {
  num = 0

  constructor() {
    super({
      element: { tagName: 'p' },
      component: { name: 'number' },
    })

    this.setNumber(this.num)
  }

  setText() {
    throw new Error('Can not do this.')
  }

  setNumber(num) {
    this.num = num
    super.setText(this.num)
    return this
  }

  add(num = 1) {
    this.num += num
    super.setText(this.num)
    return this
  }

  sub(num = 1) {
    this.num -= num
    super.setText(this.num)
    return this
  }
}

class nButton extends nTag {
  constructor() {
    super({
      element: { tagName: 'button' },
      component: { name: 'button' },
    })
  }
}

class nFlex extends nTag {
  constructor() {
    super({
      component: { name: 'flex' },
    })

    this.setStyle('display', 'flex')
    this.setStyle('justify-content', 'space-between')
  }
}

/// components ////

class nCell extends nTag {
  constructor() {
    super({
      component: { name: 'cell' },
    })

    this.setStyle('background-color', '#dcb')
    this.setStyle('display', 'inline-block')
    this.setStyle('text-align', 'center')
    this.setStyle('font-size', '2rem')
    this.setStyle('color', '#fff')
    this.setStyle('margin', `1rem`)
  }
}

class nGrid extends nTag {
  cells = []

  static SMALL = 'small'
  static MEDIUM = 'medium'
  static LARGE = 'large'

  constructor() {
    super({
      component: { name: 'grid-component' },
    })

    this.setStyle('background-color', '#cba')
    this.setStyle('border-radius', '.5rem')
    this.setStyle('padding', `1rem`)
  }

  setGrid(grid) {
    if ([nGrid.SMALL, nGrid.MEDIUM, nGrid.LARGE].indexOf(grid) === -1) {
      throw new Error('Can not do this.')
    }

    const self = this

    let width = 4
    let length = 6

    if (grid === nGrid.MEDIUM) {
      width = 5.5
      length = 5
    }

    if (grid === nGrid.SMALL) {
      width = 7
      length = 4
    }

    for (let l = 0; l < length; l++) {
      const line = new nFlex()

      for (let c = 0; c < length; c++) {
        const cell = new nCell()

        cell.setData('line', l)
        cell.setData('column', c)

        cell.setStyle('line-height', `${width}rem`)
        cell.setStyle('height', `${width}rem`)
        cell.setStyle('width', `${width}rem`)

        cell.on('click', () => {
          const event = new Event('cellclick')
          event.cell = cell
          self.element.dispatchEvent(event)
        })

        this.cells.push({ line: l, column: c, place: cell })
        line.append(cell)
      }

      this.append(line)
    }
  }

  setTextInCell(text, line, column) {
    const cell = this.cells.find((cell) => cell.line === line && cell.column === column)
    if (cell) cell.place.setText(text)
    return this
  }
}

class nScore extends nTag {
  counter = new nNumber()
  text = new nText()

  constructor() {
    super({
      component: { name: 'score-component' },
    })

    this.setStyle('background-color', '#cba')
    this.setStyle('margin', '0 0 1rem 1rem')
    this.setStyle('border-radius', '.5rem')
    this.setStyle('text-align', 'center')
    this.setStyle('padding', '.5rem')
    this.setStyle('width', '5rem')

    this.counter.setStyle('color', '#ffffff')
    this.counter.setStyle('font-weight', 'bold')
    this.append(this.counter)

    this.text.setStyle('color', '#ffffff')
    this.text.setStyle('font-size', '.75rem')
    this.append(this.text)
  }
}
