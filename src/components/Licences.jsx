import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { RiCloseLargeFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { BsBank } from "react-icons/bs";
import { BiIdCard } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

export default function Licences() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    // const [activeTab, setActiveTab] = useState('licenses');

    const toggleModal = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <div className='licence'>
            <div className="main">
                <div className="licence-blok">
                    <p>{t("lic_1")}</p>
                    <button onClick={toggleModal}>{t("lic_2")}</button>
                </div>
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={toggleModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <div></div>
                            <button className="close-btn" onClick={toggleModal}><RiCloseLargeFill className='close-btn__icon' /></button>
                        </div>
                        {/* <div className="modal-header">
                            <button className={activeTab === 'licenses' ? 'active' : ''} onClick={() => setActiveTab('licenses')}>
                                Licenses
                            </button>
                            <button className={activeTab === 'requisites' ? 'active' : ''} onClick={() => setActiveTab('requisites')}>
                                Requisites
                            </button>
                        </div> */}
                        <div className="modal-body">
                            <div className="modal-body__section">
                                <FaLocationDot className='modal-body__section__icon' />
                                <p>{t("lic_3")}</p>
                            </div>
                            <div className="modal-body__section">
                                <FaPhone className='modal-body__section__icon' />
                                <p><span>+998 90 330-57-35</span></p>
                            </div>
                            <div className="modal-body__section">
                                <BsBank className='modal-body__section__icon' />
                                <p>р/с: <span>20208000807000541001</span>, {t("lic_4")}</p>
                            </div>
                            <div className="modal-body__section">
                                <BiIdCard className='modal-body__section__icon' />
                                <p>{t("lic_5")}: <span>311063819</span></p>
                            </div>
                            {/* {activeTab === 'licenses' ? (
                                <Link to="/licenses" onClick={toggleModal}>Go to Licenses</Link>
                            ) : (
                                <Link to="/requisites" onClick={toggleModal}>Go to Requisites</Link>
                            )} */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};