import React from 'react'
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';


const ContactsWrapper = styled.ul`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    padding: 1rem;
    margin-top: 2rem;
    overflow: auto;
`;

const ContactItem = styled.li`
    background: #eee;
    border-radius: 5px;
    padding: .6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    @media screen and (max-width: 575px){
        width: 600px;
    }
    &:last-child{
        margin-bottom: 0;
    }
`;

const TrashButton = styled.button`
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50px;
    font-size: 1rem;
    display:flex;
    align-items:center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: all .3s;
    line-height: 0;

    &:hover{
        scale: 1.09;
        rotate: -15deg
    }
`;

const EmptyText = styled.h3`
    color: #666;
    text-align: center;
`;

function ContactList({ contacts, removecontact }) {

    const itemsStyle = {
        display: 'flex',
        gap: '.5rem',
        alignItems: 'center',

    }

    return contacts.length !== 0 ?
        (
            <ContactsWrapper >
                {
                    contacts.map(contact => {
                        const { name, lastName, email, phone, id } = contact;

                        return <ContactItem key={id}>
                            <p>{`${name} ${lastName}`}</p>

                            <div style={itemsStyle}>
                                <span style={{ fontSize: '1.2rem' }}>📧</span>
                                <p>{email}</p>
                            </div>

                            <div style={itemsStyle}>
                                <span style={{ fontSize: '1.2rem' }}>📞</span>
                                <p>{phone}</p>
                            </div>

                            <div>
                                <TrashButton onClick={() => removecontact(id)}>
                                    <span style={{ fontSize: '1.2rem' }}>
                                        <FaTimes />
                                    </span>
                                </TrashButton>
                            </div>
                        </ContactItem>
                    })
                }
            </ContactsWrapper>
        )
        : (
            <ContactsWrapper>
                <EmptyText>No Contacts Yet!</EmptyText>
            </ContactsWrapper>)

}

export default ContactList
