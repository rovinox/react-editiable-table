import clsx from "clsx"
import React from "react"
import xss from "xss"
import { PropTypes } from "prop-types";



const xssOption = {
    whiteList: {
        a: ['href', 'target', 'rel'],
    },
}



const ResultHTML = ({ rows, align }) => {
    const getStyleByAlign = (val) => {
        if (align.default === val) {
            return ''
        }
        return align[val]
    }
    console.log('rows form ResultHTML', rows);
    return (
        <table>
            <tbody>
                {rows.map((item, rowIndex) => {
                     
                    return (
                        <tr key={`row-${rowIndex}`}>
                            {item.col.map((col, colIndex) => {
                                if(colIndex !== 0){

                               
                                const className = clsx(getStyleByAlign(col.align), col.cellClass)
                                if (col.type === 'th') {
                                    return (
                                        <th
                                            key={`col-${rowIndex}-${colIndex}`}
                                            colSpan={col.colspan}
                                            rowSpan={col.rowspan}
                                            className={className}
                                            dangerouslySetInnerHTML={{ __html: xss(col.value, xssOption) }}
                                        />
                                    )
                                }
                                return (
                                    <td
                                        key={`col-${rowIndex}-${colIndex}`}
                                        colSpan={col.colspan}
                                        rowSpan={col.rowspan}
                                        className={className}
                                        dangerouslySetInnerHTML={{ __html: xss(col.value, xssOption) }}
                                    />
                                )
                            }  })}
                        
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
ResultHTML.propTypes = {
    rows: PropTypes.array,
    align: PropTypes.object,
    
  }
export default ResultHTML