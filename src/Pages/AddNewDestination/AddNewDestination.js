import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://warm-plains-37053.herokuapp.com/addNewplace', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('successfully Inserted');
                    reset();
                }
            })

    }
    return (
        <div>
            <h1 className="text-success my-5">Insert a New Destination for Traveller</h1>

            <form className="w-50 bg-dark py-5 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Place Name" {...register("name", { required: true })} />
                <input placeholder="image url" {...register("img", { required: true })} />
                <input placeholder="place Details" {...register("details", { required: true })} />
                <input type="number" placeholder="minimum price" {...register("price", { required: true })} />

                <input className="bg-success text-white" type="submit" />
            </form>
        </div>
    );
};

export default AddNewDestination;