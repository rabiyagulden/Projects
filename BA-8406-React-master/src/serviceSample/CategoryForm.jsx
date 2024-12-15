import { useState } from 'react';
import { baseService } from '../network/services/baseService';

const CategoryForm = ({ setRefresh, logCategoryData }) => {
    const [category, setCategory] = useState({ name: '', description: '' });

    const addCategory = async () => {
        try {
            const response = await baseService.post('/categories', {
                name: category.name,
                description: category.description,
            });
            logCategoryData(response.data);
            setRefresh((prev) => !prev);
        } catch (error) {
            console.log('CategoryForm add error', error);
        }
    };

    return (
        <>
            <div>
                <label htmlFor=''>Name: </label>
                <input
                    type='text'
                    onChange={(e) => {
                        setCategory((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }));
                    }}
                />
            </div>

            <div>
                <label htmlFor=''>Description: </label>
                <input
                    type='text'
                    onChange={(e) => {
                        setCategory((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }));
                    }}
                />
            </div>

            <div>
                <button onClick={addCategory}>Add</button>
            </div>
        </>
    );
};

export default CategoryForm;
