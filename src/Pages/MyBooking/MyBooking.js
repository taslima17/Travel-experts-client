import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);

    console.log(user?.email)
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/bookings/${user?.email}`;
        console.log(url)
        fetch(url).then(res => res.json()).then(data => {
            setBookings(data)
        })
    }, [])


    const handleDelete = (id) => {
        const confirmed = window.confirm('are you sure to delete?')
        if (confirmed) {
            fetch(`http://localhost:5000/delete/${id}`, {
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
            {bookings.length ?
                bookings.map(b => <div><h1>{b?.Destination}</h1> <br />

                    <button onClick={() => handleDelete(b._id)}>Delete This Package</button>
                </div>) : <h3>You didn't Book anyThing</h3>
            }

        </div>
    );
};

export default MyBooking;