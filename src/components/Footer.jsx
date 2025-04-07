import React from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            <div className="main">
                <div className="footer-header">
                    <Link to='/'><img src="/images/logo.PNG" alt="TLP Logo" /></Link>
                    <p>{t("footer_1")}</p>
                </div>
                <div className="footer-blok">
                    <div className="footer-blok__section-1">
                        <div className="footer-blok__section-1__part">
                            <FaPhone className='footer-blok__section-1__icon' />
                            <a href="tel:+998903305735">+998 90 330-57-35</a>
                        </div>
                        <div className="footer-blok__section-1__part">
                            <IoMdMail className='footer-blok__section-1__icon' />
                            <a href="mailto:xoliqjon@gmail.com">tillayevlawpartners@gmail.com</a>
                        </div>
                    </div>
                    <div className="footer-blok__section-2">
                        <p>{t("footer_2")}</p>
                        <div>
                            <a href="https://www.instagram.com/advokat_tillayev"><FaTelegramPlane className='footer-blok__section-2__icon' /></a>
                            <a href="https://t.me/TLP_tlp"><FaInstagram className='footer-blok__section-2__icon' /></a>
                            <a href="https://wa.me/message/7G56GOTVWLQEK1"><IoLogoWhatsapp className='footer-blok__section-2__icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};