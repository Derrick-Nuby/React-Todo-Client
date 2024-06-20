import React from 'react'
import "./../assets/styles/styles.css"
import Header from '../components/Header'
import Hero from '../components/Hero'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'


const Login: React.FC = () => {
    return (
        <>
            <Header />
            <Hero />
            <LoginForm />
            <Footer />
        </>
    )
}

export default Login