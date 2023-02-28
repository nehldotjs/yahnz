import React from 'react';
import "../styleComponents/contact.css"

function Contact(props) {
  function submitMessages(e) {
    e.preventDefault()
  }
  return (
    <>
      <div className='contact'>
        <form className='formConatainer' onSubmit={submitMessages}>
          <select name="" id="select" required>
            <option value="Inquires">Inquires</option>
            <option value="Request">Request</option>
            <option value="Complaints">Complaints</option>
          </select>
          <div className="name inputConatainer">
            <label htmlFor="email">Email</label>
            <input type="text" name='email' />
          </div>
          <div className="subject inputConatainer" >
            <label htmlFor="subject">Subject</label>
            <input type="text" name='Subject' />
          </div>
          <div className="message inputConatainer" >
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" ></textarea>
          </div>
          <div className="submitBtn">
            <button type='submit'>
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact;
