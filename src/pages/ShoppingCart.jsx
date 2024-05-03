import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Footer from '../components/Footer'
Footer

export default function ShoppingCart() {

    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar
                count={count}
                setCount={setCount}
            />
            <Hero />
            <Products
                count={count}
                setCount={setCount}
            />
            <Footer />
        </>
    )
}
