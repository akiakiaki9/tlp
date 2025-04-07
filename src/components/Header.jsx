import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
    const { t } = useTranslation();
    return (
        <div className="video-bg">
            <video
                src="/videos/header.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                playsInline>
            </video>
            <div className="effects"></div>
            <div className="video-bg__content">
                <p className='video-subtitle2'>{t("header_1")} <span>TLP</span></p>
                <h1 className="video-title">Tillayev Law Partners</h1>
                <p className="video-subtitle">{t("header_3")}</p>
                <a href="#contacts"><button>{t("header_4")}</button></a>
            </div>
        </div>
    )
};