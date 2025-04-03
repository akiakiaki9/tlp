import React from 'react'
import { BsArrowRight } from "react-icons/bs";

export default function Section2() {
    const SECTION2 = [
        {
            id: 1,
            content: 'Praesent feugiat sem mattis.'
        },
        {
            id: 2,
            content: 'A wonderful serenity.'
        },
        {
            id: 3,
            content: 'Premium services beyond you.'
        },
        {
            id: 4,
            content: 'Set a link back to this photo.'
        },
    ];

    return (
        <div className='section2'>
            <div className="main">
                <div className="section2-blok">
                    <div className="section2-blok__section">
                        <p className='section2-blok__section__p-1'>About us</p>
                        <h1>We are here to fight against any violance with <span>experience</span></h1>
                        <div className='subtitle-line'></div>
                        <br />
                        <p className='section2-blok__section__p-2'>The argument in favor of using filler text goes something like this: If you use
                            real content in the <span>design process</span>, anytime you reach a review point you’ll end up reviewing and negotiating the
                            content itself and not the design.
                        </p>
                        <p className='section2-blok__section__p-2'>Aenean tincidunt id mauris id auctor. Donec at ligula lacus. Nulla dignissim mi
                            quis neque interdum, quis porta sem finibus.
                        </p>
                        <div className="section2-blok__section__container">
                            {SECTION2.map(item => (
                                <div className="section2-blok__section__container-part" key={item.id}>
                                    <BsArrowRight className='section2-blok__section__container__icon' />
                                    <p>{item.content}</p>
                                </div>
                            ))}
                        </div>
                        <div className="section2-blok__section__footer">
                            <p>Call to ask any question</p>
                            <a href="tel:+998903305735">+998 90 330-57-35</a>
                        </div>
                    </div>
                    <div className="section2-blok__section section2-blok__section-2">
                        <div className="section2-blok__section-2__blok">
                            <h1>35</h1>
                            <p>years of practicing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};