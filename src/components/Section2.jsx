import React from 'react'
import { useTranslation } from 'react-i18next';
import { BsArrowRight } from "react-icons/bs";

export default function Section2() {
    const { t } = useTranslation();
    const SECTION2 = [
        {
            id: 1,
            content: t("about_5")
        },
        {
            id: 2,
            content: t("about_6")
        },
        {
            id: 3,
            content: t("about_7")
        },
        {
            id: 4,
            content: t("about_8")
        },
    ];

    return (
        <div className='section2'>
            <div className="main">
                <div className="section2-blok">
                    <div className="section2-blok__section">
                        <p className='section2-blok__section__p-1'>{t("about_1")}</p>
                        <h1>{t("about_2")}</h1>
                        <div className='subtitle-line'></div>
                        <br />
                        <p className='section2-blok__section__p-2'>{t("about_3")}</p>
                        <p className='section2-blok__section__p-2'>{t("about_4")}</p>
                        <div className="section2-blok__section__container">
                            {SECTION2.map(item => (
                                <div className="section2-blok__section__container-part" key={item.id}>
                                    <BsArrowRight className='section2-blok__section__container__icon' />
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="section2-blok__section__footer">
                            <p>{t("about_9")}</p>
                            <a href="tel:+998903305735">+998 90 330-57-35</a>
                        </div>
                    </div>
                    <div className="section2-blok__section section2-blok__section-2">
                        <div className="section2-blok__section-2__blok">
                            <h1>35</h1>
                            <p>{t("about_10")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};