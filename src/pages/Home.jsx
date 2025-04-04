import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Section4 from '../components/Section4'
import Form from '../components/Form'
import Footer2 from '../components/Footer2'
import Chooser from '../components/Chooser'
import Experience from '../components/Experience'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Header />
            <Section />
            <Section2 />
            <Section3 />
            <Section4 />
            <Form />
            <Experience />
            <Chooser />
            <Footer />
            <Footer2 />
        </div>
    )
};