import { useState, useEffect, useRef } from "react";
import { PropTypes } from "prop-types";
import clsx from "clsx"
import {getHtml} from './util'

const InnerCell =({ value, align, onChange, rows })=> {
 const [inputValue, setInputValue] = useState("");
 // let cellInput = useRef(null);

  useEffect(() => {
    onChange(getHtml(rows, 'center'))

    // console.log('count.current = count.current + 1;: ', cellInput.innerHTML);
    // console.log('inputValue', inputValue);
  },[inputValue]);

  return (
    <div
    // ref={(t)=>{
    //   cellInput = t
    //   console.log('t',t)
    // }}
    // onInput={(e) => {
    //   console.log('ee',e)
    //   setInputValue(e.target.innerHTML)
    // }}
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