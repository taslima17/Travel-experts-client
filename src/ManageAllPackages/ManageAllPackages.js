import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../Hooks/useAuth';

const ManageAllPackages = () => {
    const [packages, setPackages] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [approve, setApprove] = useState(false);
    const { user } = useAuth();

    useEffect(() => {
        fetch('https://warm-plains-37053.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [packages])
    // console.log(packages)
    const handleApprove = data => {
        // console.log(data)
        data.status = "approved";

        if (data.Email) {
            fetch(`https://warm-plains-37053.herokuapp.com/bookings/${data._id}`, {
                method: "PUT",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(data)
            }).then(res => res.json()).then(data => {
                alert("Approved your package")
                console.log(data);

            })
        }


    }
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

            <h1 className="text-success my-5">Manage All Packages as an Admin</h1>
            {packages.length ?
                <Table responsive="sm" className="text-success mt-5 container" striped bordered hover variant="light">
                    <thead>
                        <tr className="p-5">
                            <th>Destination</th>
                            <th>User Email</th>
                            <th>Duration</th>

                            <th>Status</th>
                            <th>Cost</th>

                            <th>Click for Update Status</th>
                            <th>Click for Delete Package</th>
                        </tr>
                    </thead>
                    <tbody>

                        {packages.map(b => <tr className="p-5">
                            <td>{b?.Destination}</td>

                            <td>{b.Email}</td>
                            <td>For 3 days 2 nights</td>
                            <td>{b?.status}</td>
                            <td>{b.Cost}</td>
                            <td><button className="border-0 rounded bg-success p-3 text-white" onClick={() => handleApprove(b)}>{b.status === "approved" ? "Approved" : "Approve"}</button></td>
                            <td><button className="border-0 rounded bg-danger p-3 text-white" onClick={() => handleDelete(b._id)}>Delete Package</button></td>
                        </tr>)}

                    </tbody>
                </Table> : <h3>No Order Placed</h3>}




        </div>
    );
};

export default ManageAllPackages;