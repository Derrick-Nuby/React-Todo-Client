import React from 'react'
import "./../assets/styles/styles.css"
import Header from '../components/Header'
import CreateAccountForm from '../components/CreateAccountForm'
import Footer from '../components/Footer'
import ErrorNotification from '../components/ErrorNotification'

const CreateAccount: React.FC = () => {
    return (
        <>
        <Header />
        <ErrorNotification />
        <CreateAccountForm />
        <Footer />
        </>
    )
}

export default CreateAccount