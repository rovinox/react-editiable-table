import { useState, useEffect, useRef } from "react";

import InnerCell from './InnerCell'
import { PropTypes } from "prop-types";
import clsx from "clsx"
import { onCellInput } from './util'
import Popover from "./common/popover/Popover";
const DisplayedTable = ({ rows, onChange, topRow, enableColumn,setRows }) => {

  const pasteAsPlainText = (event) => {
    event.preventDefault();
    event.target.innerText = event.clipboardData.getData("text/plain");
  }
  
  return (
    <div className="st-table-main" >
      <table >
        {enableColumn && <tbody>
          <tr >
            {topRow.map((_cel, i) => {
              if (i === 0) {
                return <td key={`actionTop-${i}`}>{' '}</td>
              } else {
                return (
                  <td className="st-top-action-column" key={`actionTop-${i}`} ><Popover totalColumn={topRow.length} onChange={onChange}  rows={rows} setRows={setRows} columnIndex={i} mode='column' /> </td>
                )
              }
            })}
          </tr>
        </tbody>}
        <tbody>
          {rows.map((_item, i) => {
            return (
              <tr key={`row-${i}`}>
                {rows[i].col.map((col, j) => {
                  if (j === 0) {
                    return (
                      <td key={`action-${j}`} ><Popover totalColumn={topRow.length} onChange={onChange}  rows={rows}  setRows={setRows} rowIndex={i} mode='row' /> </td>
                    )
                  } else {
                    return (
                      <td
                        key={`row-${i}-col-${j}-${col.key}`}
                        colSpan={col.colspan}
                        rowSpan={col.rowspan}
                        onPaste={pasteAsPlainText}
                        onInput={e => {
                          onCellInput(e, j, i, onChange, rows)
                        }}
                        data-cell-id={`${j}-${i}`}
                      >
                        <InnerCell selectedRowIndex={j} selectedColumnIndex={i} rows={rows} unique={col.key} align={col.align} value={col.value} />
                      </td>
                    )
                  }
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
DisplayedTable.propTypes = {
  rows: PropTypes.array,
  topRow: PropTypes.array,
  onChange: PropTypes.func,
  setRows: PropTypes.func,
  enableColumn: PropTypes.bool,
}
export default DisplayedTable