import React from 'react';
import ProductCard from "./reusable/ProductCard";

const products = [
    {
        id: 1,
        productName: "Fancy Product",
        quantity: 0,
        isRating: false,
        priceFrom: "40.00",
        priceTo: "80.00"
    },
    {
        id: 2,
        productName: "Special Item",
        quantity: 10,
        isRating: true,
        isDiscount: true,
        originalPrice: "20.00",
        discountPrice: "18.00"
    },
    {
        id: 3,
        productName: "Sale Item",
        quantity: 200,
        isRating: false,
        isDiscount: true,
        originalPrice: "20.00",
        discountPrice: "18.00"
    },
    {
        id: 4,
        productName: "Popular Item",
        quantity: 12,
        isRating: true,
        isDiscount: false,
        originalPrice: "40.00",
        discountPrice: 0
    },
    {
        id: 5,
        productName: "Sale Item",
        quantity: 10,
        isRating: true,
        isDiscount: true,
        originalPrice: "20.00",
        discountPrice: "18.00"
    },
    {
        id: 6,
        productName: "Fancy Product",
        quantity: 0,
        isRating: false,
        priceFrom: "120.00",
        priceTo: "280.00"
    },
    {
        id: 7,
        productName: "Special Item",
        quantity: 230,
        isRating: true,
        isDiscount: true,
        originalPrice: "20.00",
        discountPrice: "18.00"
    },
    {
        id: 8,
        productName: "Popular Item",
        quantity: 12,
        isRating: true,
        isDiscount: false,
        originalPrice: "40.00",
        discountPrice: 0
    }
]


export default function Products({ count, setCount }) {


    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-sm-2 row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-center">

                    {
                        products.map((product, idx) => (
                            <ProductCard
                                key = {product.id}
                                product = {product}
                                count = {count}
                                setCount = {setCount}
                            />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
