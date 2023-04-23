import { useEffect, useState } from "react"
import DisplayedTable from "./DisplayedTable"
import { PropTypes } from "prop-types";

import {parse, getFirstRow} from './util'
const TableEditor =({html})=> {

const [rows, setRows] = useState([])
useEffect(()=>{
        setRows(parse(html))

    },[html])
 
    console.log('rows',rows);
  return (
    <div> 
        <DisplayedTable
    rows={rows}
        />
     </div>
  )
}
TableEditor.propTypes = {
 html:PropTypes.string
    }
export default  TableEditor