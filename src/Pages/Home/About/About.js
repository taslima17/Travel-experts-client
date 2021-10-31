import React from 'react';

const About = () => {
    return (
        <div className="p-lg-5 p-1">
            <h1 className=" mb-5">About Us</h1>
            <div style={{ textAlign: "left" }} className="d-flex p-lg-3 p-1 flex-lg-nowrap flex-wrap">
                <img className="mx-auto w-75" height="400px" src="https://www.realhomejobsnow.com/wp-content/uploads/2016/09/45072953_ml-810x772.jpg" alt="" />
                <div className="px-5 ">
                    <h4 className="pb-5 fw-bold">We’re growing fast, and we’d love for you to join us</h4>
                    <p>Travel is all about freedom. So it makes sense that planning and booking your trip should be simple, not a chore. <br />
                        We know you're looking for the best prices and most flexibilty to choose what's right for you. Which is why we're always hard at work making sure our app and website are super straightforward and speedy.
                        <br />
                        Choose where you want to go, when you want to go and get the very best price from thousands of sites without having to look anywhere else. Plus, check out all the ways we can help you find a trip that's tailored to what you’re looking for, no matter your travel style or your budget.Feeling flexible? Search ‘Everywhere’ to see where you can go for a great price. Got a destination in mind? Use our Price Alerts to find out when the fare changes.
                        <br />
                        And once you know when and where you’re going, book in just a few quick steps, whether on our app or website which are available in more than 30 languages.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;