import { renderToStaticMarkup } from "react-dom/server"
import ResultHTML  from "./ResultHTML"

export function hasClass(el, className) {
    if (el.classList) {
      return el.classList.contains(className)
    } else {
      return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
    }
  }
export const onCellInput = (e, b, a, onChange, rows) => {
    // if (onPasting.current) {
    //   return
    // }
    // const newState = produce(state, data => {
      if (
        hasClass(e.target, 'st-table-editable') &&
        e.target.parentNode.getAttribute('data-cell-id') === `${b}-${a}`
        ) {
          rows[a].col[b].value = e.target.innerHTML
          
      
        onChange(getHtml(rows, 'center'))
        
      }
   
    //})
    
    // dispatch({ type: "SET_ROW", row: newState.row })
    // dispatch({ type: "SET_HISTORY", history: newState.history })
  }

export function renderHTML(rows, align) {
    return (<ResultHTML
      rows={rows}
      align={align}
    />)
  }
export function getHtml(rows, align) {
    let html = renderToStaticMarkup(renderHTML(rows, align))
    html = html.replace(/&quot;/g, '"')
    html = html.replace(/data-tmp="(.*?)"/g, '$1')
    html = html.replace(/&lt;/g, '<')
    html = html.replace(/&gt;/g, '>')
    console.log('html', html);
    return html
  }
export function getFirstRow(firstRow) {
    const arr = []
    let i = 0
    const row = firstRow[0].col
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
            const cols = [
              {cellClass
              : 
              "",
              colspan
              : 
              1,
              rowspan
              : 
              1,
              type
              : 
              "th",
              value
              : 
              "action Row"}
            ]
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
                    console.log('from cols', cols);
                })
            rows.push(row)
            console.log('from rows', rows);
        })
    return rows
}