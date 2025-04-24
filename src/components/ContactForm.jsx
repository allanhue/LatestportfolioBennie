import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const sendEmail = async () => {
    const response = await fetch('https://api.emailservice.com/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'allanmwangi329@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
      }),
    });

    if (!response.ok) 
      // send error message 
  
    {
      console.error('Failed to send email');
    }
  //   //set error message 
  //  setError(err){
  //   e
  //  }

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit" className="submit-button">Send</button>
    </form>
  );
}

export default ContactForm;
