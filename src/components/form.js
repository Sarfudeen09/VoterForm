import React, { useState } from 'react';
import './form.css'; 

const VoterRegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    sex: '',
    above18: false,
    selectedParty: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
  };

  return (
    <div className="form-container">
      <div className="heading" ><h1>Voter Survey</h1></div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Sex:</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
          </select>
        </div>
        <div className="form-field">
          <label>
            Are you above 18?
            <input
              type="checkbox"
              name="above18"
              checked={formData.above18}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-field1">
          <label>Select Party:</label>
          <br />
          <label>
            <input
              type="radio"
              name="selectedParty"
              value="Ruling Party"
              checked={formData.selectedParty === 'Ruling Party'}
              onChange={handleChange}
              required
            />
            Ruling Party 
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="selectedParty"
              value="Opposition Party"
              checked={formData.selectedParty === 'Opposition Party'}
              onChange={handleChange}
              required
            />
            Opposition Party
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="selectedParty"
              value="NOTA"
              checked={formData.selectedParty === 'NOTA'}
              onChange={handleChange}
              required
            />
            NOTA
          </label>
        </div>
        <button className='form-field2' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VoterRegistrationForm;
