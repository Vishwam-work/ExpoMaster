import React from 'react'
import "../../style/perfoma/performa.scss"
import { useState } from 'react'
import Sidebar_pannel from '../../components/sidebar/Sidebar_pannel'
import Navbar from '../../components/navbar/Navbar-screen'
import Performa_widgets from '../widgets/Performa_widgets'
import Performa_table from '../../components/Tables/Performa_table'
import Performa_form from '../../components/forms/Performa_form'
const Performa = () => {

  return (

    <div className='performa-head'>
      <Sidebar_pannel />

      <div className="performacontainer">
        <Navbar />
        <div className="widget">
          <Performa_widgets type="Total_sale" />
          <Performa_widgets type="Toal_receipt" />
          <Performa_widgets type="Total_Due" />
          <Performa_widgets type="Total_Expenses" />
        </div>
        {/* <div className="maincontainer">
          <button onClick={handleAddNew}>Add New</button>
          <Performa_form isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveData} />
          <Performa_table data={data} />
        </div> */}
      </div>
    </div>


  )
}
export default Performa
