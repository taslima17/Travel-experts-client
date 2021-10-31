import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';

const ManageAllPackages = () => {
    const [packages, setPackages] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [approve, setApprove] = useState(false);
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    const handleApprove = data => {
        console.log(data)
        const newUser = { Destination: data.Destination, firstName: data.firstName, LastName: data.LastName, Email: data.Email, PhonNumber: data.PhonNumber, gender: data.gender, days: data.days, Cost: data.Cost, Entry_Date: data.Entry_Date, status: "approved" }
        setUsers(newUser);
        if (users.Email !== undefined) {
            fetch(`http://localhost:5000/bookings/${data._id}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(users)
            }).then(res => res.json()).then(data => {
                alert("Approved your package")
                console.log(data);
                setApprove(true);
            })
        }


    }
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
            {packages.length ? packages.map(b => <div><h1>{b?.Destination}</h1> <br />
                <p className="text-danger">{approve ? "" : "pending"}</p>
                <button className="btn-primary" onClick={() => handleApprove(b)}>{approve ? "Approved" : "Approve"}</button>
                <button onClick={() => handleDelete(b._id)}>Delete This Package</button>


            </div>)
                : <h3>No Order Placed</h3>

            }
        </div>
    );
};

export default ManageAllPackages;