import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick-slider";

const CustomerFeedBack = () => {
    const [feedback, setFeedback] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true)
        fetch('https://warm-plains-37053.herokuapp.com/feedbacks').then(res => res.json()).then(data => {
            setFeedback(data);
            setLoading(false)
        })
    }, [])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500, slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="my-5">
            <h2 className="p-3"> What Customer Says About us</h2>
            {loading && <Spinner animation="border" variant="secondary" />}
            <Slider className="container" {...settings}>

                {
                    feedback.map(f => <Card style={{ height: "550px" }} className="p-4  border-0">
                        <Card.Img variant="top" className="rounded-circle w-50 mx-auto" height="150px" src={f.img} />
                        <Card.Body>
                            <Card.Title>{f.name}</Card.Title>
                            <p>{f.profession}</p>
                            <q className="fs-4 ">{f.feedback}</q>
                        </Card.Body>

                    </Card>)
                }
            </Slider>
        </div>
    );

};

export default CustomerFeedBack;