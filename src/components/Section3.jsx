import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { RiCriminalLine } from "react-icons/ri";
import { useTranslation } from 'react-i18next';

export default function Section3() {
    const { t } = useTranslation();
    const SECTION3 = [
        {
            id: 1,
            icon: RiAdminFill,
            title: t("service_3"),
            subtitle: t("service_4")
        },
        {
            id: 2,
            icon: BsFillPeopleFill,
            title: t("service_5"),
            subtitle: t("service_6")
        },
        {
            id: 3,
            icon: RiCriminalLine,
            title: t("service_7"),
            subtitle: t("service_8")
        },
        {
            id: 4,
            icon: GrMoney,
            title: t("service_9"),
            subtitle: t("service_10")
        },
    ];

    return (
        <div className='section3'>
            <div className="main">
                <div className="section3-sar">
                    <p>{t("service_1")}</p>
                    <h1>{t("service_2")}</h1>
                    <div className='subtitle-line'></div>
                </div>
                <div className="section3-blok">
                    {SECTION3.map(item => (
                        <div className='section3-blok__section' key={item.id}>
                            <item.icon className='section3__icon' />
                            <p className='section3-blok__section__p-1'>{item.title}</p>
                            <p className='section3-blok__section__p-2'>{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};