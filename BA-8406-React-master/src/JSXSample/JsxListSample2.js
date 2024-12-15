import { categories } from '../data/categories';

const JsxListSample2 = () => {
    return (
        <ul>
            {categories.map((category, index) => {
                console.log(index);
                return <li>{category.name}</li>;
                // return <li key={category.id}>{category.name}</li>;
            })}
        </ul>
    );
};

export default JsxListSample2;
