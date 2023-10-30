import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../style/perfoma/performa.scss"
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Sidebar_pannel from '../../components/sidebar/Sidebar_pannel'
import Navbar from '../../components/navbar/Navbar-screen'
import Performa_widgets from '../widgets/Performa_widgets'
import Performa_table from '../../components/Tables/Performa_table'
import Performa_form from '../../components/forms/Performa_form'
import { Link } from 'react-router-dom';
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
        <div className="maincontainer">
          <h1 style={{ color: "#3E4AB6", fontSize: "28px", marginBottom: "50px" }}>Performa invoice</h1>
          <Link to="/performaDocs" style={{ textDecoration: "none" }}>
            <span style={{ border: "2px solid #3E4AB6", padding: "5px", borderRadius: "10px", marginBottom: "50px", color: "white", background: "lightgreen", fontSize: "1.2rem", fontWeight: "600" }}>Add New</span>
          </Link>

        </div>
        <div className="tablecontainer">
      
          <Performa_table />
        </div>
      </div>
    </div>


  )
}
export default Performa
