import { baseService } from '../network/services/baseService';

const CategoryList = ({ categoryList, setRefresh }) => {
    const deleteCategory = async (id) => {
        try {
            await baseService.delete(`/categories/${id}`);
            setRefresh((prev) => !prev);
        } catch (err) {
            console.log('CategoryList, delete error:', err);
        }
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {categoryList &&
                    categoryList.map((category) => {
                        return (
                            <tr key={category.id}>
                                <td>{category.id}</td>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                                <td>
                                    <button
                                        onClick={() =>
                                            deleteCategory(category.id)
                                        }>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
        </table>
    );
};

export default CategoryList;
