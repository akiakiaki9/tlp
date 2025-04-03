import React from 'react'
import { RiAdminFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { RiCriminalLine } from "react-icons/ri";

export default function Section3() {
    const SECTION3 = [
        {
            id: 1,
            icon: RiAdminFill,
            title: 'Administrative law',
            subtitle: 'Governing public administration: rules, regulations, and legal framework for government actions and citizen interactions.'
        },
        {
            id: 2,
            icon: BsFillPeopleFill,
            title: 'Civil law',
            subtitle: 'Regulating private disputes: contracts, property, family, and torts, ensuring fairness and resolving conflicts between individuals.'
        },
        {
            id: 3,
            icon: RiCriminalLine,
            title: 'Criminal law',
            subtitle: 'Enforcing societal norms: defining offenses, prosecuting offenders, and protecting public safety through legal sanctions and procedures.'
        },
        {
            id: 4,
            icon: GrMoney,
            title: 'Economic law',
            subtitle: 'Structuring market activities: regulating trade, finance, and competition to foster economic stability and promote equitable growth.'
        },
    ];

    return (
        <div className='section3'>
            <div className="main">
                <div className="section3-sar">
                    <p>Services</p>
                    <h1>We are here to fight against any violance with <span>experience</span></h1>
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