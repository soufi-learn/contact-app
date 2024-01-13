import React, { useState } from 'react'
import '../css/contact.css';
import ContactList from './contactList';
import AlertText from './alertText';
import { v4 } from 'uuid';


function Contact() {
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(false);
    const [contact, setContact] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const inputs = [
        { type: 'text', name: 'name', placeholder: 'Name' },
        { type: 'text', name: 'lastName', placeholder: 'Last Name' },
        { type: 'email', name: 'email', placeholder: 'Email' },
        { type: 'text', name: 'phone', placeholder: 'Phone' },
    ];

    // DESTRUCTURE FORM KEYS
    const { name, lastName, email, phone } = contact;

    const inputHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact(form => ({ ...form, [name]: value }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!name || !lastName || !email || !phone) {
            setError(true);
        } else {
            setError(false);
            const newContact = { ...contact, id: v4() };
            setContacts(contacts => [...contacts, newContact]);
            setContact({ name: '', lastName: '', email: '', phone: '' })
        }
    }

    const removecontact = (id) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts)
    }

    return (
        <div>
            <form action="#" id='form-box' onSubmit={submitHandler}>
                <div className="inputs-wrapper">
                    {inputs.map((input, index) => {
                        const { type, placeholder, name } = input;

                        return (
                            <input key={index} type={type} className='input' autoComplete='off' placeholder={placeholder} maxLength={placeholder === 'Phone' ? '11' : ''} name={name} value={contact[name]} onChange={inputHandler} />
                        )
                    })}
                </div>

                <button type='submit' className='contact-btn'>Add Contact</button>
            </form>

            {error && <AlertText />}


            <ContactList contacts={contacts} removecontact={removecontact} />

        </div>
    )
}

export default Contact
