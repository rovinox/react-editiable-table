import { useState, useEffect, useRef } from "react";

import InnerCell from './InnerCell'
import { PropTypes } from "prop-types";
import clsx from "clsx"
import { onCellInput } from './util'
const DisplayedTable = ({ rows, onChange }) => {
const topRow = [
  {
      "cellClass": "",
      "colspan": 1,
      "rowspan": 1,
      "type": "button",
      "value": "action"
  },
  {
      "type": "th",
      "colspan": 1,
      "rowspan": 1,
      "value": "Item",
      "cellClass": ""
  },
  {
      "type": "th",
      "colspan": 1,
      "rowspan": 1,
      "value": "Month",
      "cellClass": ""
  },
  {
      "type": "th",
      "colspan": 1,
      "rowspan": 1,
      "value": "Month",
      "cellClass": ""
  }
]
  return (
    <table >
      <tbody>
        <tr >
      {topRow.map((cel, i)=>{
        return (
          // eslint-disable-next-line react/jsx-key
              <td key={`row-${i}`}>action cal</td>
              
              )
            })}
            </tr>
</tbody>
      <tbody>
        {rows.map((_item, i) => {
          return (
            <tr key={`row-${i}`}>
              {/* {selectedColIndex !== i && ( */}
              {/* <th
               // className="st-table-side js-table-side"
              // onClick={e => {
              //     onSelectCol(e, i)
              // }}
              >
                <span className="st-table-toggle-btn"></span>
              </th> */}
              {/* )} */}
              {/* {selectedColIndex === i && ( */}
              {/* <th
                className="st-table-side js-table-side selected"
              // onClick={onUnselect}
              >
                <span className="st-table-toggle-btn"></span>
              </th> */}
              {/* )} */}
              {rows[i].col.map((col, j) => {
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
                    <InnerCell rows={rows} onChange={onChange} unique={col.key} align={col.align} value={col.value} />
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
DisplayedTable.propTypes = {
  rows: PropTypes.array,
  onChange: PropTypes.func,
}
export default DisplayedTable