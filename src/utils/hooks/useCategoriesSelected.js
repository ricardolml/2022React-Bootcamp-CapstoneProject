import { useState } from "react";


const useCategoriesSelected = () => {

    const [categoriesSelect, setCategoriesSelect] = useState([]);

    const handleSelectCategory = (e, id) => {
        const select = e.target;

        if (select.className === 'active') {
            select.className = '';

            const newArreCategories = categoriesSelect.filter((idCategory) => idCategory !== id);
            setCategoriesSelect(newArreCategories);
        } else {
            select.className = 'active';
            setCategoriesSelect([...categoriesSelect, id]);
        }
    }

    return {
        categoriesSelect,
        handleSelectCategory,
    }

}

export default useCategoriesSelected