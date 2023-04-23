import React from 'react'
import { PropTypes } from "prop-types";
import clsx from "clsx"

const InnerCell =({ value, align })=> {
  return (
    <div
    //ref={element => (this.element = element)}
    className={clsx('st-table-editable', align)}
    contentEditable
    dangerouslySetInnerHTML={{ __html: value }}
  ></div>
  )

  
}
InnerCell.propTypes = {
    value:PropTypes.string,
    align:PropTypes.string
     }
export default  InnerCell