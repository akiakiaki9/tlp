import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import Switcher from './Switcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t } = useTranslation();
    return (
        <nav className='navbar'>
            <div className="navbar-blok">
                <div className="navbar-blok__section">
                    <Link to='/'><img src="/images/logo.png" alt="TLP Logo" /></Link>
                </div>
                <div className="navbar-blok__section">
                    <Switcher />
                    <div className="navbar-blok__section__container">
                        <p>{t("navbar")}</p>
                        <div>
                            <a href="https://www.instagram.com/advokat_tillayev/">
                                <FaInstagram className="navbar__icon" />
                            </a>
                            <a href="https://t.me/TLP_tlp">
                                <FaTelegramPlane className="navbar__icon" />
                            </a>
                            <a href="https://wa.me/message/7G56GOTVWLQEK1">
                                <FaWhatsapp className="navbar__icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};