//import { useState } from 'react'

import './App.css'
import TableEditor from './components/TableEditor'

function App() {

  const html = `<table>
  <thead>
    <tr>
      <th>Item</th>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>food</td>
      <td>January</td>
      <td>$100</td>
    </tr>
    <tr>
      <td>gas</td>
      <td>February</td>
      <td>$80</td>
    </tr>
  </tbody>
</table>`

  return (
    <>
      <TableEditor
      html={html}
      column={true} 
      onChange={html => console.log(html)}
      />
    </>
  )
}

export default App
