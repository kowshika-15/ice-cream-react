import React from 'react';

const Reviews = () => {
    return (
        <div className="container mt-5">
            <h1>Customer Reviews</h1>
            <div className="review">
                <p>"The best ice cream shop in town! The flavors are amazing and the staff is very friendly." - Deepak Krish</p>
            </div>
            <div className="review">
                <p>"I love this place! The variety of flavors is fantastic, and the ice cream is always fresh." - Tanush Sunil</p>
            </div>
            <div className="review">
                <p>"A great place to hang out with friends and enjoy delicious ice cream." - Deepika Durai</p>
            </div>
            <div className="review">
                <p>"Their ice cream cakes are to die for! Highly recommend this shop." - Saraswathi krishnan</p>
            </div>
            <div className="review">
                <p>"An excellent selection of vegan options as well. A must-visit place to everyone!" - Saran Sudeep</p>
            </div>
            <div className="video mt-5">
                <h2>Check out our video</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/video_id" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default Reviews;
