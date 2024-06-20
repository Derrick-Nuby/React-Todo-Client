import React from 'react'
import "./../assets/styles/styles.css"
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'
import Footer from '../components/Footer'
import ErrorNotification from '../components/ErrorNotification'

const Login: React.FC = () => {
    return (
        <>
            <Header />
            <ErrorNotification />
            <LoginForm />
            <Footer />
        </>
    )
}

export default Login