import React from 'react';
import { IoIosPeople } from "react-icons/io";
import { SiAdguard } from "react-icons/si";
import { FaUserClock } from "react-icons/fa6";

export default function Section() {
    const SECTION = [
        {
            id: 1,
            icon: IoIosPeople,
            title: 'Random words for each',
            subtitle: 'Experienced counsel in ad-hoc and institutional arbitration in legal hubs like Uzbekistan'
        },
        {
            id: 3,
            icon: SiAdguard,
            title: 'Random words for each',
            subtitle: 'Experienced counsel in ad-hoc and institutional arbitration in legal hubs like Uzbekistan'
        },
        {
            id: 2,
            icon: FaUserClock,
            title: 'Random words for each',
            subtitle: 'Experienced counsel in ad-hoc and institutional arbitration in legal hubs like Uzbekistan'
        }
    ];

    return (
        <div className='section'>
            <div className="main">
                <div className="section-blok">
                    {SECTION.map(item => (
                        <div className='section-blok__section' key={item.id}>
                            <div className="section-blok__section-part">
                                <div className="section-blok__section-part-1">
                                    <item.icon className="section__icon" />
                                </div>
                            </div>
                            <div className="section-blok__section-part">
                                <p className='section-blok__section-part__p-1'>{item.title}</p>
                                <p className='section-blok__section-part__p-2'>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
