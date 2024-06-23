import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Order = () => {
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    const addToCart = (price) => {
        setTotal(total + price);
    };

    const removeFromCart = (price) => {
        setTotal(total - price);
    };

    const handleBuyNow = () => {
        navigate('/details');
    };

    return (
        <div className="container mt-5">
            <h1>Order Ice Cream</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="image-container">
                            <img className="card-img-top center-image" src="./images/vanilla.jpg" alt="Product 1" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Vanilla Crush</h5>
                            <p className="card-text">Rs 50.00</p>
                            <div className="button-container">
                                <button onClick={() => addToCart(50.00)} className="btn btn-primary">Add to Cart</button>
                                <button onClick={() => removeFromCart(50.00)} className="btn btn-danger ml-2">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="image-container">
                            <img className="card-img-top center-image" src="./images/strawberry.jpg" alt="Product 2" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Strawberry Tuty</h5>
                            <p className="card-text">Rs 70.00</p>
                            <div className="button-container">
                                <button onClick={() => addToCart(70.00)} className="btn btn-primary">Add to Cart</button>
                                <button onClick={() => removeFromCart(70.00)} className="btn btn-danger ml-2">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="image-container">
                            <img className="card-img-top center-image" src="./images/chocolate.jpg" alt="Product 3" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Death By Chocolate</h5>
                            <p className="card-text">Rs 60.00</p>
                            <div className="button-container">
                                <button onClick={() => addToCart(60.00)} className="btn btn-primary">Add to Cart</button>
                                <button onClick={() => removeFromCart(60.00)} className="btn btn-danger ml-2">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="image-container">
                            <img className="card-img-top center-image" src="./images/mango.jpg" alt="Product 4" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Mango Delight</h5>
                            <p className="card-text">Rs 55.00</p>
                            <div className="button-container">
                                <button onClick={() => addToCart(55.00)} className="btn btn-primary">Add to Cart</button>
                                <button onClick={() => removeFromCart(55.00)} className="btn btn-danger ml-2">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="image-container">
                            <img className="card-img-top center-image" src="./images/blueberry.jpg" alt="Product 5" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Blueberry Bliss</h5>
                            <p className="card-text">Rs 65.00</p>
                            <div className="button-container">
                                <button onClick={() => addToCart(65.00)} className="btn btn-primary">Add to Cart</button>
                                <button onClick={() => removeFromCart(65.00)} className="btn btn-danger ml-2">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-4">
                        <div className="image-container">
                            <img className="card-img-top center-image" src="./images/pista.jpg" alt="Product 6" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Pistachio Heaven</h5>
                            <p className="card-text">Rs 75.00</p>
                            <div className="button-container">
                                <button onClick={() => addToCart(75.00)} className="btn btn-primary">Add to Cart</button>
                                <button onClick={() => removeFromCart(75.00)} className="btn btn-danger ml-2">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="total-container mt-4">
                <h3>Total: Rs {total}</h3>
                <button onClick={handleBuyNow} className="btn btn-success buy-now-btn">Buy Now</button>
            </div>
        </div>
    );
};

export default Order;
