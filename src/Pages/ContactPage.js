import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import Title from '../Components/Title';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Title title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+91 7995822168'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'Prasannagadarla@gmail.com'} title={'Email'}/>
        
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
