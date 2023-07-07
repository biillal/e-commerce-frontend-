import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Cart from '../pages/cart/Cart'

function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}

            <Footer />
        </div>
    )
}

export default MainLayout
