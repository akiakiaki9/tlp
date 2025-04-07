import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaCalendarAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Experience() {
    const { t } = useTranslation();
    const EXP = t("EXP", { returnObjects: true });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className='exp'>
            <div className="main">
                <div className="exp-header">
                    <div className="exp-header__section-1">
                        <p>{t("exp_1")}</p>
                        <h1>{t("exp_2")}</h1>
                        <div className='subtitle-line'></div>
                    </div>
                    <div className="exp-header__section-2">
                        <p>{t("exp_3")}</p>
                    </div>
                </div>
                <Slider {...settings} className="exp-blok">
                    {EXP.map((item) => (
                        <div className='exp-blok__section' key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <div className="exp-blok__section__container">
                                <div className="exp-blok__section__container__header">
                                    <FaCalendarAlt className='exp-blok__section__container__header__icon' />
                                    <p>{item.duration}</p>
                                </div>
                                <h3>{item.title}</h3>
                                <Link to={`/experience/${item.id}`}><button>{t("exp_4")}</button></Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};