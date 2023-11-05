import React from 'react'
import { useState, useRef } from 'react'
import '../../style/modal/portmodal.scss'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function PackageModal() {


    const [show, setShow] = useState(false);
    const [newOption, setNewOption] = useState('');

    const [messagepackage, setMessagePackage] = useState('');
    const [packages, setpackages] = useState('');



    const handleClose = () => {
        setShow(false);
        // window.location.reload();
        setNewOption('');
    };
    



    const handleShow = () => setShow(true);
    const handleAddOption = () => {
        const newOption = `${packages}-${messagepackage}`;

        if (newOption.trim() !== '') {
            // onAddOption(newOption); // Call the callback to add the new option to the main page state
            var package_data = { packages, messagepackage }
            console.log('Package data:', package_data);
            axios.post('http://127.0.0.1:8000/expo/package_add/', package_data)
                .then(response => {
                    console.log('API response:', response.data);

                    handleClose();
                })
                .catch(error => {
                
                    console.log(error)
                    handleClose();
                })
        };
    }


    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                +
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>Add Package</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    
                    <label>
                        Name of Package :
                        <input type="text" name="pro" className="form-control" value={packages} onChange={(e) => setpackages(e.target.value)} />
                    </label>
                    <div className="div">

                    <label style={{width:"100%"}}>
                        Pacakage Discription:
                        <textarea
                        
                        className='form-control'
                        name="message"
                        value={messagepackage}
                        onChange={(e)=>setMessagePackage(e.target.value)}
                        />
                    </label>
                        </div>

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
