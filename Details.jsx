import React from 'react';
import './Home.css';

const Details = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Ordered successfully');
    };

    return (
        <div className="container mt-5">
            <h1>Details</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter your address" required />
                </div>
                <div className="form-group">
                    <label htmlFor="houseNo">House No</label>
                    <input type="text" className="form-control" id="houseNo" placeholder="Enter your house number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label htmlFor="pref">Personal Preference</label>
                    <input type="text" className="form-control" id="pref" placeholder="Enter your personal preferences....." />
                </div>
                <button type="submit" className="btn btn-primary custom-submit-btn custom-margin-top">Submit</button>
            </form>
        </div>
    );
};

export default Details;
