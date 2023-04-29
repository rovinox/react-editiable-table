//import { useState } from 'react'

import './App.css'
import TableEditor from './components/TableEditor'
import { useState } from 'react'
function App() {
const [enableColumn, setEnableColumn] = useState(false)
  const html = `<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Month</th>
      <th>Savings per year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>food</td>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>gas per 10000 miles</td>
      <td>February</td>
      <td>$80</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>`

  return (
    <div className='app' >
      <div className='app-header'>
      <div className="topcoat-button-bar">
   <div className="topcoat-button-bar__item">
     <button onClick={()=>{setEnableColumn(!enableColumn)}}  className="topcoat-button-bar__button">{!enableColumn ? "Enable Column" : 'Disable Column'}</button>
   </div>
   <div className="topcoat-button-bar__item">
     <button className="topcoat-button-bar__button">Two</button>
   </div>
   <div className="topcoat-button-bar__item">
     <button className="topcoat-button-bar__button">Two</button>
   </div>
   <div className="topcoat-button-bar__item">
     <button className="topcoat-button-bar__button">Three</button>
   </div>
</div>
      </div>
      <TableEditor
      html={html}
      enableColumn={enableColumn} 
      onChange={html => console.log(html)}
      />
    </div>
  )
}

export default App
