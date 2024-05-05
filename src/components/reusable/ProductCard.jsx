import React, { useState } from 'react';
import { Flip, toast } from 'react-toastify';

export default function ProductCard({ product, setCount }) {

    const [isProductAdded, setIsProductAdded] = useState(false);

    const handleOnClick = () => {
        if (isProductAdded) {
            setCount(prev => prev - 1);
            setIsProductAdded(false);
        }
        else {
            setCount(prev => prev + 1);
            setIsProductAdded(true);
            toast.success('Product added to cart!', {
                transition: Flip
            });
        }
    }

    return (
        <>
            <div className="col mb-5">
                <div className="card h-100">

                    {/* Product Tag */}
                    {

                        product.isDiscount && <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem", fontSize: "12px" }}>Sale</div>
                    }

                    {/* Product image */}
                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                    {/* Product details */}
                    <div className="card-body p-4">
                        <div className="text-center">

                            {/* Product name */}
                            <h5 className="fw-bolder">{product.productName}</h5>

                            {
                                product.isRating && <div className="d-flex justify-content-center small text-warning mb-2">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            }

                            {/* Product price */}
                            {
                                product.quantity === 0 ? `$${product.priceFrom} - $${product.priceTo}` :
                                    !product.isDiscount ? <span>${product.originalPrice}</span> :
                                        <span className="text-muted">
                                            <span className="text-decoration-line-through">${product.originalPrice}</span> ${product.discountPrice}
                                        </span>
                            }

                        </div>
                    </div>
                    {/* Product actions */}
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        {

                            product.quantity === 0 ? <div className="text-center"><a className="btn btn-outline-dark mt-auto" ><i className="fa-solid fa-eye"></i> View options</a></div> :
                                <div className="text-center"><a className={`btn ${isProductAdded ? 'btn-outline-danger' : 'btn-outline-dark'}  mt-auto`} onClick={handleOnClick}>{isProductAdded ? <><i className="fa-solid fa-trash"></i> Remove From Cart</> : <> <i className="fa-solid fa-cart-shopping"></i> Add to Cart</>}</a></div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
