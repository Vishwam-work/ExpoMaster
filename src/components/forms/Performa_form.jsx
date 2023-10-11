import React from 'react'
import { useState } from 'react'
function Performa_form({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSave = () => {
      onSave(formData);
      setFormData({});
    };
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
    <div className="modal-content">
      <h2>Add New Item</h2>
      <form>
        <input type="text" name="itemName" value={formData.itemName} onChange={handleInputChange} />
        {/* Add more form fields as needed */}
        <button onClick={handleSave}>Save</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
  )
}
export default Performa_form