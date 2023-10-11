import React from 'react'

function Performa_table({data}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item Name</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.itemName}</td>
           
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Performa_table