import { useState, useEffect, useRef } from "react";

import InnerCell from './InnerCell'
import { PropTypes } from "prop-types";
import clsx from "clsx"
import { onCellInput } from './util'
import { Popover } from "./common/popover/Popover";
const DisplayedTable = ({ rows, onChange, topRow, enableColumn }) => {


  console.log('rows: top ', topRow);
  return (
    <div className="st-table-main" >


      <table >
        {enableColumn && <tbody>
          <tr >
            {topRow.map((_cel, i) => {
              console.log('iii',i);
              return (
                <td key={`actionTop-${i}`} ><Popover /> </td>

              )
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
                      <td key={`action-${j}`} ><Popover /> </td>
                    )
                  } else {
                    return (
                      <td
                        key={`row-${i}-col-${j}-${col.key}`}
                        colSpan={col.colspan}
                        rowSpan={col.rowspan}
                        // onCopy={onCopyTable}
                        // onPaste={onPasteTable}
                        // onContextMenu={e => {
                        //     onUpdateTable(e, j, i)
                        // }}
                        onInput={e => {
                          onCellInput(e, j, i, onChange, rows)
                        }}
                        // onKeyUp={e => {
                        //     onCellKeyup(e, j, i)
                        // }}
                        // onClick={e => {
                        //     onUpdateTable(e, j, i)
                        // }}
                        // onMouseDown={e => {
                        //     onUpdateTable(e, j, i)
                        // }}
                        // onMouseUp={e => {
                        //     onUpdateTable(e, j, i)
                        // }}
                        // onMouseMove={e => {
                        //     onUpdateTable(e, j, i)
                        // }}
                        // className={clsx(
                        //   {
                        //     'st-table-selected': col.selected,
                        //     'st-table-th': col.type === 'th',
                        //     'st-table-border-top': col.mark && col.mark.top,
                        //     'st-table-border-right': col.mark && col.mark.right,
                        //     'st-table-border-bottom': col.mark && col.mark.bottom,
                        //     'st-table-border-left': col.mark && col.mark.left,
                        //   },
                        //   col.cellClass
                        // )}
                        data-cell-id={`${j}-${i}`}
                      >
                        <InnerCell selectedRowIndex={j} selectedColumnIndex={i} rows={rows} onChange={onChange} unique={col.key} align={col.align} value={col.value} />
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
  enableColumn: PropTypes.boolean,
}
export default DisplayedTable