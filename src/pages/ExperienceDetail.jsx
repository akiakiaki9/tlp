import React from 'react'
import { useTranslation } from 'react-i18next';
import { GoDotFill } from 'react-icons/go';
import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { FaCalendarAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Footer2 from '../components/Footer2';

export default function ExperienceDetail() {
    const { id } = useParams();
    const { t } = useTranslation();
    const EXP = t("EXP", { returnObjects: true });
    const experience = EXP.find(item => item.id === parseInt(id));

    if (!experience) {
        return <p>Not found!</p>
    }

    return (
        <div>
            <Navbar />
            <div className="pagename">
                <div className="pagename-blok">
                    <div>
                        <h1>Faires</h1>
                    </div>
                    <div>
                        <Link to="/">
                            <p className="pagename-blok__p-1">Home</p>
                        </Link>
                        <GoDotFill className="pagename-icon" />
                        <p className="pagename-blok__p-2">
                            {experience.title.length > 40 ? experience.title.slice(0, 40) + ".." : experience.title}
                        </p>
                    </div>
                </div>
            </div>
            <div className="main">
                <div className='detail'>
                    <div className="detail-blok">
                        <div className="detail-blok__section-1">
                            <img src={experience.image} alt={experience.title} />
                            <div className="detail-blok__section-1__main">
                                <h1>{experience.title}</h1>
                                <div className="detail-blok__section-1__header">
                                    <div>
                                        <FaCalendarAlt className='detail-blok__section-1__icon' />
                                        <p>{experience.duration}</p>
                                    </div>
                                    <div>
                                        <IoPerson className='detail-blok__section-1__icon' />
                                        <p>by Tillayev</p>
                                    </div>
                                </div>
                                <div className="detail-blok__section-1__container">
                                    <p>{experience.subtitle_1}</p>
                                    <p>{experience.subtitle_2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="detail-blok__section-2">
                            <h3>Others</h3>
                            <div className='subtitle-line'></div>
                            <br />
                            <div className="detail-blok__section-2__container">
                                {EXP.filter(item => item.id !== parseInt(id)).map(item => (
                                    <div className="detail-blok__section-2__container-part" key={item.id}>
                                        <Link to={`/experience/${item.id}`}>
                                            <img src={item.image} alt={item.title} />
                                            <p>{item.title}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
};