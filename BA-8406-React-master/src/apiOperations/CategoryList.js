import { useEffect, useState } from 'react';

const CategoryList = () => {
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        fetch('https://northwind.vercel.app/api/categories')
            .then((response) => response.json())
            .then((data) => setCategoryList(data));
    }, []);

    return (
        <ul>
            {categoryList.map((category) => (
                <li key={category.id}>{category.name}</li>
            ))}
        </ul>
    );
};

export default CategoryList;
