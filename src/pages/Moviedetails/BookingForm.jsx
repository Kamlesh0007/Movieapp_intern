import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookingForm = ({ movie,closeForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save user details to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    // Do something with the booking data (e.g. send to server)
    console.log(`Booking ${movie} with user ${name} (${email}, ${phone})`);
    toast.success('Ticket booked successfully!', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      closeForm();
  };

  return (
    <div className="booking-form">
      <h2>Book a ticket for {movie}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit">Book Ticket</button>
        </div>
      </form>

    </div>
  );
};

export default BookingForm;
