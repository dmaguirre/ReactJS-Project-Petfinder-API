import React from 'react';
import Header from "./Header";

export default function Contact() {

    const handleSubmit = () =>{
        alert("Thank you for sending us a message!");
    }
    return (
    <div className="header">
        <header>
            <Header />
        </header>
        <main className="main">
            <form className='contact-form'>
                <div>
                <label>Name: </label>
                <input type='text' placeholder='Name' name='name' required/>
                </div>
                <div>
                <label>Email: </label>
                <input type='email' placeholder='Email' name='email' required/>
                </div>
                <div>
                <label>Contact Number: </label>
                <input type='text' placeholder='Contact Number' name='contact-number'required/>
                </div>
                <div>
                <label>How can we help you? </label>
                <textarea placeholder='Your message' cols='40' rows='6' name='textarea'/>
                </div>
                <div className="submit-reset-buttons">
                <button type='submit' value="Submit" name='submit-button'onSubmit={handleSubmit}>Submit</button>
                <button type='reset' value="Reset" name='reset-button'>Reset</button>
                </div>
            </form>    
        </main>    
    </div>
    )
}