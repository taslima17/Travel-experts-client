import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/addNewplace', {
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

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Place Name" {...register("name", { required: true })} />
                <input placeholder="image url" {...register("img", { required: true })} />
                <input placeholder="place Details" {...register("details", { required: true })} />
                <input type="number" placeholder="minimum price" {...register("price", { required: true })} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddNewDestination;