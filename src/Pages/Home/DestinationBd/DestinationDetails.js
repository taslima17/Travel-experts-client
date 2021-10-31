import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Destinationdetails.css'
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const DestinationDetails = () => {
    const { id } = useParams();
    const [place, setPlace] = useState([]);
    const [Book, setBook] = useState(false);
    const { user } = useAuth();
    //react hook-form state
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        data.status = "pending";
        fetch('https://warm-plains-37053.herokuapp.com/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Booked Successfully')
                }
                console.log(result);
                reset();
            })

    }
    const name = user.displayName.split(' ');
    console.log(name);


    //fetch data by id
    useEffect(() => {
        const url = `https://warm-plains-37053.herokuapp.com/places/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPlace(data))
    }, [])
    console.log(place)

    return (
        <div className="p-5 d-flex flex-lg-nowrap flex-wrap ">
            <div className="p-2">
                <img width="50%" src={place.img} alt="" />
                <h5 className="mt-3">{place.name}</h5>
                <p className="w-50 mx-auto">{place.details}</p>
            </div>
            <form className="w-100 py-2 bg-dark" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="p-2 text-white fw-bold">Book Your Destination</h3>
                <input placeholder="Destination" {...register("Destination", { required: true })} value={place.name} />
                <input placeholder="First Name" {...register("firstName", { required: true })} value={name[0]} />

                <input placeholder="Last Name"  {...register("LastName", { required: true })} value={name[1]} /> <br />

                <input type="email" placeholder="Email" {...register("Email")} value={user.email} />
                <br />
                <input placeholder="Phone Number"  {...register("PhonNumber", { required: true })} />
                <br />
                <select {...register("gender")}>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <br />

                <input value="3" type="number" placeholder="Day you wants to stay" {...register("days", { required: true })} />

                <input type="number" placeholder="cost" value={place.price} {...register("Cost", { required: true })} />
                <br />
                <div className="d-flex align-items-center mx-auto">
                    <label className="ms-5" htmlFor="Entery Date">Entry Date :</label>
                    <input className="w-50" type="date" placeholder="Entry Date"  {...register("Entry_Date", { required: true })} />
                    <br />
                </div>

                <input type="submit" className="bg-success text-white fs-5  border-0" value="Book" />
            </form>
        </div>
    );
};

export default DestinationDetails;