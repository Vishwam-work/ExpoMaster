import React from 'react'
import { useState ,useRef} from 'react'
import '../../style/modal/portmodal.scss'
import CountryData from '../countryJson/cs.json'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function PortModal({ onAddOption, ...props }) {

    const inputRef = useRef(null);
    const [show, setShow] = useState(false);
    const [newOption, setNewOption] = useState('');

    const [country, setCountry] = useState('');
    const [port, setPort] = useState('');

    function handleCountry(e) {
        const getcountryname = e.target.options[e.target.selectedIndex].getAttribute("name");
        setCountry(getcountryname)
    }

    const handleClose = () => {
        setShow(false);
        setNewOption('');
    };
    const handleNewPort = ()=>{
        setPort(inputRef.current.value)
    }

    const handleShow = () => setShow(true);
    const handleAddOption = () => {
        const newOption = `${port}-${country}`;

        if (newOption.trim() !== '') {
            onAddOption(newOption); // Call the callback to add the new option to the main page state
            handleClose();
        }
    };

  
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>Add Port</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
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
                        </label>}
                    <label>
                        Name of port:
                        <input type="text" name="port" className="form-control" value={port} onChange={(e) => setPort(e.target.value)} placeholder="Enter new option" />
                    </label>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddOption}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}
