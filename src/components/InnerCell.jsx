import { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import clsx from "clsx"


  
    const InnerCell =({ value, align,selectedRowIndex, selectedColumnIndex })=> {
 

  return (
    <div
    className={clsx('st-table-editable', align,selectedColumnIndex == 0 && 'first-column')}
    contentEditable={selectedRowIndex !== 0 && selectedColumnIndex !==0}
    dangerouslySetInnerHTML={{ __html: value }}
  ></div>
  )

  
}
InnerCell.propTypes = {
    value:PropTypes.string,
    align:PropTypes.string,
    selectedRowIndex:PropTypes.number,
    selectedColumnIndex:PropTypes.number
     }
export default  InnerCell