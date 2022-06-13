import { useState } from "react";


const useCategoriesSelected = (categoriesData) => {

    const categoriesArr = categoriesData.results.map(category => ({
        ...category,
        selected: false,
    }));

    const [categories, setCategories] = useState(categoriesArr);
    const [categoriesSelect, setCategoriesSelect] = useState([]);

    const handleSelectCategory = (index) => {
        const newListCategories = [...categories];
        newListCategories[index].selected = !newListCategories[index].selected;
        setCategories(newListCategories);

        const categoriesSelectList = newListCategories.filter( 
            category => category.selected === true
        ).map( category => category.id );
        setCategoriesSelect(categoriesSelectList);       
        
    }

    return{
        categories ,
        categoriesSelect,
        handleSelectCategory,
    }

}

export default useCategoriesSelected