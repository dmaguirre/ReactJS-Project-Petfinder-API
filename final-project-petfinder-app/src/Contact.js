import React from 'react';
import Header from "./Header";

export default function Contact() {
    return (
    <div className="header">
        <header>
            <Header />
        </header>
        <main className="main">
            <form className='contact-form'>
                <div>
                <label>Name: </label>
                <input type='text' placeholder='Name' name='name'/>
                </div>
                <div>
                <label>Email: </label>
                <input type='email' placeholder='Email' name='email'/>
                </div>
                <div>
                <label>Contact Number: </label>
                <input type='text' placeholder='Contact Number' name='contact-number'/>
                </div>
                <div>
                <label>How can we help you? </label>
                <textarea placeholder='Your message' cols='40' rows='6' name='textarea'/>
                </div>
                <div>
                <input type='button' value='Submit' name='submit-button'/>
                </div>
            </form>    
        </main>    
    </div>
    )
}
