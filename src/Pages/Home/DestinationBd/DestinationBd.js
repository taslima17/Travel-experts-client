import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';




const DestinationBd = () => {
    const [places, setPlaces] = useState([]);
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data);
                setLoading(false)
            })
    }, []);
    const handleDetails = (id) => {
        const url = `/destination/${id}`;
        history.push(url);
    }


    return (
        <div>

            <h1 className="mt-5">Choose your destination in Bangladesh</h1>
            <div className="destination my-5">
                {loading && <Spinner animation="border" variant="secondary" />}
                <Row xs={1} md={3} className="g-5 container mx-auto ">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        places.map(p => <Col>
                            <Card className="bg-dark text-white border-0">
                                <Card.Img variant="top" height="300px" src={p.img} />
                                <Card.Body>
                                    <Card.Title>{p.name}</Card.Title>
                                    <hr />
                                    <Card.Text className="d-flex justify-content-between">
                                        <p>3 days 2 nights</p>
                                        <p>minimun cost {p.price}</p>
                                    </Card.Text>
                                    <button className="rounded p-2" onClick={() => handleDetails(p._id)}>See Details for Booking</button>
                                </Card.Body>

                            </Card>
                        </Col>)
                    ))}
                </Row>


            </div>
        </div>
    );
};

export default DestinationBd;