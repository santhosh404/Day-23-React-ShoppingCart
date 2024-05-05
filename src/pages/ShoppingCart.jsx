import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';

export default function ShoppingCart() {

    const [count, setCount] = useState(0);

    return (
        <>

            {/* Navbar Component */}
            <Navbar
                count={count}
                setCount={setCount}
            />

            {/* Hero Component */}
            <Hero />

            {/* Products Component */}
            <Products
                count={count}
                setCount={setCount}
            />

            {/* Footer Component */}
            <Footer />

            {/* Toast message */}
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>

    )
}
