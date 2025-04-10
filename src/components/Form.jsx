import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { PiChats } from "react-icons/pi";
import { useTranslation } from 'react-i18next';

export default function Form() {
    const { t } = useTranslation();
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

        const formattedData = {
            theme: formData.theme,
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            message: formData.message
        };

        const response = await fetch('https://formspree.io/f/xeoapoyo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formattedData)
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
                        <p>{t("form_1")}</p>
                        <h1>{t("form_2")}</h1>
                        <div className='subtitle-line'></div>
                    </div>
                    <div className="form-header__section-2">
                        <div className="form-header__section-2__part">
                            <div>
                                <IoLocationOutline className='form-header__icon' />
                                <p>{t("form_3")}</p>
                            </div>
                        </div>
                        <div className="form-header__section-2__part">
                            <div>
                                <TbPhoneCall className='form-header__icon' />
                                <a href='tel:+998903305735'>+998 90 330-57-35</a>
                            </div>
                            <div>
                                <PiChats className='form-header__icon' />
                                <a href='mailto:tillayevlawpartners@gmail.com'>tillayevlawpartners@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <form className="form-blok" onSubmit={handleSubmit}>
                    <div className="form-blok__section">
                        <input type="text" placeholder={t("form_4")} name="firstName" value={formData.firstName} onChange={handleChange} />
                        <input type="text" placeholder={t("form_5")} name="lastName" value={formData.lastName} onChange={handleChange} />
                        <input type="email" placeholder={t("form_6")} name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="form-blok__section">
                        <textarea placeholder={t("form_7")} name="message" value={formData.message} onChange={handleChange} />
                    </div>
                    <div className="form-blok__section">
                        <button type='submit'>{t("form_8")}</button>
                    </div>
                </form>
            </div>
        </div>
    );
};