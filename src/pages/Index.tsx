import React from 'react'
import "./../assets/styles/styles.css"
import Header from '../components/Header'
import Hero from '../components/Hero'
import DescriptionContainer from '../components/DescriptionContainer'
import Footer from '../components/Footer'

const Index: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <DescriptionContainer />
            <Footer />
        </>
    )
}

export default Index