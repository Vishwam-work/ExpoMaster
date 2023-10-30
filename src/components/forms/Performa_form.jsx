import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Sidebar_pannel from '../sidebar/Sidebar_pannel';
import Navbar from '../../components/navbar/Navbar-screen'
import Performa_widgets from '../../pages/widgets/Performa_widgets';

import PortModal from '../Modals/PortModal';
import axios from 'axios';

import CountryData from '../countryJson/cs.json'

// import CountrySelect from 'react-bootstrap-country-select';
// import 'react-bootstrap-country-select/dist/react-bootstrap-country-select.css';

function Performa_form(props) {

  const [options, setOptions] = useState([]);

  const handleAddOption = (newOption) => {
    setOptions([...options, newOption]);
  };



  // const history = useHistory();
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [buyerOrder, setBuyerOrder] = useState('')
  const [orderdate, setOrderDate] = useState('');
  const [Consignee, setConsignee] = useState('')
  const [port,setPort] = useState('')

  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [stateid, setStateid] = useState([]);

  const [error, setError] = useState(false);

  function handlePort(e){
    const getportname = e.target.options[e.target.selectedIndex].text;
    console.log(getportname)
    setPort(getportname)
  }

  function handleCountry(e) {
    const getcountryid = e.target.value;
    const getcountryname = e.target.options[e.target.selectedIndex].getAttribute("name");
    setCountry(getcountryname)
    const getstatedata = CountryData.find(country => country.country_id === getcountryid).states
    setStateid(getstatedata)



  }
  function handleState(e) {
    const getstatename = e.target.options[e.target.selectedIndex].text;
    console.log(getstatename)
    setState(getstatename)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let isError = false;

    if (name.trim() === '') {
      isError = true;
    }
    if (buyerOrder.trim() === '') {
      isError = true;
    }
    if (orderdate.trim() === '') {
      isError = true;
    }

    if (date.trim() === '') {
      isError = true;
    }

    // if (Consignee.trim() === '') {
    //   isError = true;
    // }
    // if (country.trim() === '') {
    //   isError = true;
    // }
    // if (state.trim() === '') {
    //   isError = true;
    // }
    // if (port.trim() === '') {
    //   isError = true;
    // }

    setError(isError);
    if (!isError) {

      var performa_values = { name, date,buyerOrder,orderdate,Consignee, country, state,port };
      console.log('Form data:', performa_values);
      axios.post('http://your-backend-api-url', performa_values)
        .then(response => {
          // Handle the response from the server
          console.log('API response:', response.data);
        })
        .catch(error => {
          // Handle any errors
          console.error('API error:', error);
        });
      // history.push('/perfoma');
      // window.location.href = '/performa'

    }
  };




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
          <h1 style={{ color: "#3E4AB6", fontSize: "28px", marginBottom: "50px" }}>New Docs</h1>
          <div className="formcontainer">

            <form action="" method='' onSubmit={handleSubmit} >
              <div className="row">
                <div className="col">
                  <label>
                    PI no:
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Date:
                    <input type="date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Buyer Order No.:
                    <input type="text" className="form-control" value={buyerOrder} onChange={(e) => setBuyerOrder(e.target.value)} />
                  </label>
                </div>
                <div className="col">
                  <label>
                    Order Date:
                    <input type="date" className="form-control" value={orderdate} onChange={(e) => setOrderDate(e.target.value)} />
                  </label>
                </div>
              </div>
              <div className="row">

                <div className="col-6">
                  <label>
                    Consignee:
                    <input type="text" className="form-control" value={Consignee} onChange={(e) => setConsignee(e.target.value)} />
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    Country
                    <select name="country" className="form-control" onChange={(e) => { handleCountry(e) }} >
                      <option> --Select the country -- </option>
                      {
                        CountryData.map((getcountry, index) => (
                          <option name={getcountry.country_name} value={getcountry.country_id} key={index}>{getcountry.country_name}</option>
                        ))

                      }
                    </select>
                  </label>
                </div>
                <div className="col-3">
                  <label>
                    State
                    <select name="state" className="form-control" onChange={(e) => { handleState(e) }} >
                      <option> --Select the State -- </option>
                      {
                        stateid.map((getstate, index) => (
                          <option name={getstate.state_name} value={getstate.state_id} key={index}>{getstate.state_name}</option>
                        ))
                      }
                    </select>
                  </label>
                </div>
              </div>
              <div className="row" style={{marginTop:"20px"}}>
                  <label>
                    Port Name
                  </label>
                <div className="col-6" style={{display:"flex"}}>
                  <select name='port' className="form-control" onChange={(e)=>{handlePort(e)}}>
                    <option> --Select the Port -- </option>
                    {options.map((option, index) => (
                      <option key={index} value={option}> {option} </option>
                    ))}
                  </select>
                  <PortModal onAddOption={handleAddOption} />
                </div>
              </div>


              {error && <p>Please fill all fields correctly.</p>}
              <button type="submit">Submit</button><br />

            </form>

          </div>
        </div>
      </div>
    </div>
  )
}



export default Performa_form