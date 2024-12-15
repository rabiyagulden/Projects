import { useEffect, useState } from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import { baseService } from '../network/services/baseService';

const CategoryPage = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        // fetch('https://northwind.vercel.app/api/categories')
        //     .then((response) => response.json())
        //     .then((data) => setCategoryList(data));
        // axios
        //     .get('https://northwind.vercel.app/api/categories')
        //     .then((response) => setCategoryList(response.data));
        getCategories();

        // IIFE
        // (async () => {
        //     const response = await axios.get(
        //         'https://northwind.vercel.app/api/categories'
        //     );
        //     setCategoryList(response.data);
        // })();
    }, [refresh]);

    const getCategories = async () => {
        // const response = await axios.get(
        //     'https://northwind.vercel.app/api/categories'
        // );
        // setCategoryList(response.data);

        try {
            const data = await baseService.get('/categories');
            setCategoryList(data);
        } catch (error) {
            console.log('CategoryList, Get error:', error);
        }
    };

    const logCategoryData = (data) => {
        console.log('parent', data);
    };

    return (
        <>
            <CategoryForm
                setRefresh={setRefresh}
                logCategoryData={logCategoryData}
            />
            <CategoryList categoryList={categoryList} setRefresh={setRefresh} />
        </>
    );
};

export default CategoryPage;
