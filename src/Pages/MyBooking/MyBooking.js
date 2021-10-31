import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);

    console.log(user?.email)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `https://warm-plains-37053.herokuapp.com/bookings/${user?.email}`;
        console.log(url)
        fetch(url).then(res => res.json()).then(data => {
            setBookings(data)
        })
    }, [bookings])


    const handleDelete = (id) => {
        const confirmed = window.confirm('are you sure to delete?')
        if (confirmed) {
            fetch(`https://warm-plains-37053.herokuapp.com/delete/${id}`, {
                method: "DELETE"
            }).then(res => res.json()).then(data => {

                if (data.deletedCount > 0) {
                    const newBooking = bookings.filter(b => b._id !== id);

                    setBookings(newBooking);

                }
            })
        }

    }
    return (
        <div>
            <h1 className="my-5 text-success"> See Yor Booked Packages</h1>
            {bookings.length ?
                <Table responsive="sm" striped bordered hover variant="light" className="container mt-5 text-success ">
                    <thead>
                        <tr className="p-5">
                            <th>Destination</th>

                            <th>Duration</th>


                            <th>Cost</th>


                            <th>Delete Package</th>
                        </tr>
                    </thead>
                    <tbody>

                        {bookings.map(b => <tr className="p-5">
                            <td>{b?.Destination}</td>


                            <td>For 3 days 2 nights</td>

                            <td>{b.Cost}</td>

                            <td><button className="border-0 rounded bg-dark p-3 text-white" onClick={() => handleDelete(b._id)}>Delete Package</button></td>
                        </tr>)}

                    </tbody>
                </Table> : <h3>You didn't Book anyThing</h3>}


        </div>
    );
};

export default MyBooking;