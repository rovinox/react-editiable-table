import { useEffect, useState } from "react"
import DisplayedTable from "./DisplayedTable"
import { PropTypes } from "prop-types";

import {parse} from './util'
const TableEditor =({html,onChange})=> {

const [rows, setRows] = useState([])
useEffect(()=>{
        setRows(parse(html))

    },[html])
 
    console.log('rows',rows);
  return (
    <div> 
        <DisplayedTable
    rows={rows}
    onChange={onChange}
        />
     </div>
  )
}
TableEditor.propTypes = {
 html:PropTypes.string,
 onChange:PropTypes.func
    }
export default  TableEditor