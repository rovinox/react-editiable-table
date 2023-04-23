export function getFirstRow(firstRow) {
    console.log('firstRow: ', firstRow);
    const arr = []
    let i = 0
    if (firstRow?.length >0) {
      return arr
    }
    const row = firstRow.col
    row.forEach(item => {
      const length = item.colspan
      for (let t = 0; t < length; t++) {
        arr.push(i)
        i++
      }
    })
    return arr
  }
export function parseHTML(string, wrap) {
    const tmp = document.implementation.createHTMLDocument('')
    tmp.body.innerHTML = wrap ? `<div>${string}</div>` : string
    return tmp.body.children[0]
}
export function parse(html, format = 'html') {
    const rows = []
    const doc = parseHTML(html, true)
    const trs = doc.querySelectorAll('tr')
        ;[].forEach.call(trs, (tr) => {
            const row = {}
            const cols = []
            const cells = tr.querySelectorAll('th,td')
            row.col = cols
                ;[].forEach.call(cells, (cell) => {
                    const col = {}
                    const html = format === 'html' ? cell.innerHTML : cell.innerText
                    if (cell.tagName === 'TH') {
                        col.type = 'th'
                    } else {
                        col.type = 'td'
                    }
                    col.colspan = parseInt(cell.getAttribute('colspan')) || 1
                    col.rowspan = parseInt(cell.getAttribute('rowspan')) || 1
                    col.value = ''
                    if (html) {
                        col.value = html.replace(/{(.*?)}/g, '&lcub;$1&rcub;')
                        col.value = col.value.replace(/\\/g, '&#92;')
                    }
                    const classAttr = cell.getAttribute('class')
                    let cellClass = ''
                    if (classAttr) {
                        const classList = classAttr.split(/\s+/)
                        classList.forEach(item => {
                            const align = this.getAlignByStyle(item)
                            if (align) {
                                col.align = align
                            } else {
                                cellClass += ` ${item}`
                            }
                        })
                    }
                    col.cellClass = cellClass
                    cols.push(col)
                })
            rows.push(row)
        })
    console.log('convert ', rows)
    return rows
}