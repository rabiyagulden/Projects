import CategoryForm from "./CategoryForm";
import Categories from "./Categories";
import React, { useState, useEffect } from 'react';

import axios from 'axios';

const CategoryPage = () => {

    const [categories, setCategoryList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getCategories();
    }, [refresh])

    const getCategories = async () => {
        try {
            const data = await axios.get('https://northwind.vercel.app/api/categories');
            setCategoryList(data);
        }
        catch (error) {
            console.log('Category List', error)
        }
    };
    const logCategoryData = (data) => {

        console.log(data);
    };

    return (
        <>
            <CategoryForm setRefresh={setRefresh} logCategoryData={logCategoryData} ></CategoryForm>
            <Categories categories={categories} refresh={refresh} />
        </>

    );
};

export default CategoryPage;