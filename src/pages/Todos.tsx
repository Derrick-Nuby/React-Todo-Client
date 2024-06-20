import React from 'react'
import "./../assets/styles/styles.css"
import Header from '../components/Header'
import Hero from '../components/Hero'
import TodoForm from '../components/TodoForm'
import TodoItemsContainer from '../components/TodoItemsContainer'
import Footer from '../components/Footer'
import ErrorNotification from '../components/ErrorNotification'

const Todos: React.FC = () => {
    return (
        <>
            <Header />
            <ErrorNotification />
            <Hero />
            <TodoForm />
            <TodoItemsContainer />
            <Footer />
        </>
    )
}

export default Todos