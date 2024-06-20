import React from 'react'
import "./../assets/styles/styles.css"
import Header from '../components/Header'
import CreateAccountForm from '../components/CreateAccountForm'
import Footer from '../components/Footer'

const CreateAccount: React.FC = () => {
    return (
        <>
        <Header />
        <CreateAccountForm />
        <Footer />
        </>
    )
}

export default CreateAccount