import React from 'react';
import './Home.css'; 

const Home = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron">
                <h1 className="display-4">Services We Provide</h1>
                <p className="lead">
                    At Ice Cream Shop, we offer a variety of services to ensure you have the best experience possible:
                </p>
                <ul className="services-list">
                    <li><i><strong>Custom Ice Cream Cakes:</strong></i> Perfect for any celebration, our custom ice cream cakes are made to order with your favorite flavors and designs.</li>
                    <li><i><strong>Catering:</strong> </i>Let us bring the joy of ice cream to your next event with our professional catering services. We offer a range of packages to suit any occasion.</li>
                    <li><i><strong>Ice Cream Truck Rental:</strong></i> Add a unique touch to your event with our ice cream truck. Available for parties, corporate events, and more.</li>
                    <li><i><strong>Seasonal Specials:</strong></i> Enjoy our rotating selection of seasonal flavors and limited-time creations. There's always something new to try!</li>
                    <li><i><strong>Delivery Service:</strong></i> Get your favorite ice cream delivered right to your door. Perfect for those cozy nights in or surprise treats for loved ones.</li>
                </ul>
                <hr className="my-4" />
                <p>Explore our full range of services and make your next event unforgettable with Ice Cream Shop.</p>
                <hr className="my-4" />
                <h2>Contact Us</h2>
                <p>If you have any questions or need further information, please don't hesitate to contact us:</p>
                <p><strong><h2>Address</h2></strong></p>
                <p>1234, Rajive Gandhi Street, Anna Nagar, Chennai 67</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> contact@icecreamshop.com</p>
            </div>
        </div>
    );
}

export default Home;
