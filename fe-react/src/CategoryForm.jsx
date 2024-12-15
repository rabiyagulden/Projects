import React, { useState } from 'react';
import axios from 'axios';

function CategoryForm({ setRefresh, logCategoryData }) {

    const [category, setCategory] = useState({
        name: '',
        description: ''
    });


    const handleChange = (event) => {
        const { name, value } = event.target;
        setCategory(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://northwind.vercel.app/api/categories', category);
            logCategoryData(response.data);
            setRefresh((prev) => !prev);

        } catch (error) {
            console.error('Error:', error.response);

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={category.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={category.description}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default CategoryForm;
