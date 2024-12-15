import { categories } from '../data/categories';

const JsxListSample3 = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {categories.map((category) => {
                    return (
                        <tr key={category.id}>
                            <td>{category.id}</td>
                            <td>{category.name}</td>
                            <td>{category.description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default JsxListSample3;
