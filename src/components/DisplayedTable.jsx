import React from 'react'
import InnerCell from './InnerCell'
import { PropTypes } from "prop-types";
import { getFirstRow } from './util'
import clsx from "clsx"

const DisplayedTable = ({ rows }) => {
  const selectedRowIndex = 1
  const firstRow = rows?.length ? rows[0]?.col : []
  return (
    <table >
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
                    // onInput={e => {
                    //     onCellInput(e, j, i)
                    // }}
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
                    <InnerCell unique={col.key} align={col.align} value={col.value} />
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
  firstRow: PropTypes.array,
}
export default DisplayedTable