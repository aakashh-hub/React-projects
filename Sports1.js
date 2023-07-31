import React, { useState } from 'react';

const SportsRegistrationForm = () => {
  const [sport, setSport] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [fees, setFees] = useState('');
  const [references, setReferences] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleFeesChange = (event) => {
    setFees(event.target.value);
  };

  const handleReferencesChange = (event) => {
    setReferences(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation checks (you can customize as per your requirements)
    if (!sport || !name || !phoneNumber || !address || !fees || !references) {
      alert('Please fill in all the fields.');
      return;
    }

    if (isNaN(fees) || isNaN(references)) {
      alert('Fees and references must be numbers.');
      return;
    }

    const totalAmountPaid = parseInt(fees) * parseInt(references);
    setTotalAmount(totalAmountPaid);

    // Submit logic (you can customize this part to connect with your backend, etc.)
    // For this example, we'll just show a success message.
    setRegistrationSuccess(true);
  };

  return (
    <div>
      <h2>Sports Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Sport:</label>
          <select value={sport} onChange={handleSportChange}>
            <option value="">-- Select Sport --</option>
            <option value="Tennis">Tennis</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={handleAddressChange} />
        </div>
        <div>
          <label>Fees:</label>
          <input type="text" value={fees} onChange={handleFeesChange} />
        </div>
        <div>
          <label>References:</label>
          <input type="text" value={references} onChange={handleReferencesChange} />
        </div>
        <div>
          <label>Total Amount to be Paid:</label>
          <span>{totalAmount}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
      {registrationSuccess && <p>Registration is successful! Thank you.</p>}
    </div>
  );
};

export default SportsRegistrationForm;
