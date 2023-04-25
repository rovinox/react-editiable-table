import { useEffect, useState } from "react"
import DisplayedTable from "./DisplayedTable"
import { PropTypes } from "prop-types";

import {parse, getFirstRow} from './util'
const TableEditor =({html,onChange, enableColumn})=> {

const [rows, setRows] = useState([])
const [topRow, setTopRow] = useState([])
useEffect(()=>{
  const htmlArr = parse(html)
  const top = getFirstRow(htmlArr) 
 
        setRows(htmlArr)
        setTopRow(top)

    },[html])
 
    console.log('rows',rows);
  return (
    <div className="table-editor-container" > 
        <DisplayedTable
    rows={rows}
    topRow={topRow}
    onChange={onChange}
    enableColumn={enableColumn}
        />
     </div>
  )
}
TableEditor.propTypes = {
 html:PropTypes.string,
 onChange:PropTypes.func,
 enableColumn:PropTypes.boolean
    }
export default  TableEditor