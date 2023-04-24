import clsx from "clsx"
import React from "react"
import xss from "xss"


const xssOption = {
    whiteList: {
        a: ['href', 'target', 'rel'],
    },
}



export const ResultHTML = ({ rows, align }) => {
    const getStyleByAlign = (val) => {
        if (align.default === val) {
            return ''
        }
        return align[val]
    }
    console.log('rows', rows);
    return (
        <table>
            <tbody>
                {rows.map((item, rowIndex) => {
                    return (
                        <tr key={`row-${rowIndex}`}>
                            {item.col.map((col, colIndex) => {
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
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}