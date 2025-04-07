import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Footer2() {
    const { t } = useTranslation();
    return (
        <div className='footer2'>
            <div className="footer2-blok">
                <p>{t("footer_3")} <a href="https://akbarsoft.uz">Akbar Soft</a></p>
            </div>
        </div>
    )
};