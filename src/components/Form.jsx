import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { PiChats } from "react-icons/pi";

export default function Form() {
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
                                <a href='mailto:xoliqjon@gmail.com'>xoliqjon@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form-blok">
                    <div className="form-blok__section">
                        <input type="text" placeholder='First Name' />
                        <input type="text" placeholder='Last Name' />
                        <input type="email" placeholder='Email Address' />
                    </div>
                    <div className="form-blok__section">
                        <textarea type="text" placeholder='Message' />
                    </div>
                    <div className="form-blok__section">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};