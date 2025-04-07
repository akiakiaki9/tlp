import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Section4() {
    const { t } = useTranslation();
    return (
        <div className='section4'>
            <div className="main">
                <div className="section4-blok">
                    <div className="section4-blok__section-1">
                        <p>{t("fun_1")}</p>
                        <h1>{t("fun_2")}</h1>
                        <div className='subtitle-line'></div>
                    </div>
                    <div className="section4-blok__section-2">
                        <p>{t("fun_3")}</p>
                        <p>{t("fun_4")}</p>
                    </div>
                </div>
                <div className="section4-footer">
                    <div className="section4-footer__section section4-footer__section-1">
                        <p className='section4-footer__section__p-1'>1825+</p>
                        <p className='section4-footer__section__p-2'>{t("fun_5")}</p>
                    </div>
                    <div className="section4-footer__section section4-footer__section-2">
                        <p className='section4-footer__section__p-1'>532+</p>
                        <p className='section4-footer__section__p-2'>{t("fun_6")}</p>
                    </div>
                    <div className="section4-footer__section section4-footer__section-1">
                        <p className='section4-footer__section__p-1'>+69</p>
                        <p className='section4-footer__section__p-2'>{t("fun_7")}</p>
                    </div>
                    <div className="section4-footer__section section4-footer__section-2">
                        <p className='section4-footer__section__p-1'>+32</p>
                        <p className='section4-footer__section__p-2'>{t("fun_8")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};