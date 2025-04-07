import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { PiChats } from "react-icons/pi";

export default function Form() {
    const [formData, setFormData] = useState({
        theme: "Новое сообщение от пользователя к сайту Tillayev Law Partners!",
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/xeoapoyo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            });
        } else {
            alert('Failed to send message.');
        }
    };
    return (
        <div className='form' id='contacts'>
            <div className="main">
                <div className="form-header">
                    <div className="form-header__section-1">
                        <p>Contact Us</p>
                        <h1>Feel free to ask somthing we are <span>here</span></h1>
                        <div className='subtitle-line'></div>
                    </div>
                    <div className="form-header__section-2">
                        <div className="form-header__section-2__part">
                            <div>
                                <IoLocationOutline className='form-header__icon' />
                                <p>Mirobod district, Chimkent street, house 17</p>
                            </div>
                        </div>
                        <div className="form-header__section-2__part">
                            <div>
                                <TbPhoneCall className='form-header__icon' />
                                <a href='tel:+998903305735'>+998 90 330-57-35</a>
                            </div>
                            <div>
                                <PiChats className='form-header__icon' />
                                <a href='mailto:xoliqjon@gmail.com'>tillayevlawpartners@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form-blok" onSubmit={handleSubmit}>
                    <div className="form-blok__section">
                        <input type="text" placeholder='First Name' name="First Name" value={formData.firstName} onChange={handleChange} />
                        <input type="text" placeholder='Last Name' name="Last Name" value={formData.lastName} onChange={handleChange} />
                        <input type="email" placeholder='Email Address' name="Email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-blok__section">
                        <textarea type="text" placeholder='Message' name="Message" value={formData.message} onChange={handleChange} />
                    </div>
                    <div className="form-blok__section">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};