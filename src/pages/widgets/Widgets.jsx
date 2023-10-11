import React from 'react'
import "../../style/widgets/widgets.scss"
function Widgets({type}) {
  let data;

  switch (type) {
    case 'invoice':
      data={
        title: 'Performa Invoice',
        titler:'Purchase Order'
      }
      
      break;
    case 'sales':
      data={
        title: 'Total sales',
        titler:'Total Profit'

      }
      
      break;
    case 'purchase':
      data={
        title: 'Total Purchase',
        titler:'Total expense'
      }

      
      break;
    case 'reach':
      data={
        title: 'CFS REACHED',
        titler:'CFS UNREACHED'
      }
      
      break;
  
    default:
      break;
  }
  return (
    <div className="widgets">
        <div className="left">
          <span className='title'>{data.title}</span>
          <span className='Counter'>1</span>
     
        </div>
        <div className="right">
        <span className='titler'>{data.titler}</span>
          <span className='Counter'>1</span>
        </div>
     
    </div>
  )
}

export default Widgets