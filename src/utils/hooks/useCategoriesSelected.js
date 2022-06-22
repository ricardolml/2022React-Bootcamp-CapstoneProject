import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCategoriesSelected = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoriesSelect, setCategoriesSelect] = useState([]);

  const handleSelectCategory = (e, id) => {
    const select = e.target;
    if (select.className === 'active') {
      select.className = '';
      const newArreCategories = categoriesSelect.filter(
        (idCategory) => idCategory !== id
      );
      setSearchParams({ categories: newArreCategories.join('_') });
      setCategoriesSelect(newArreCategories);
    } else {
      select.className = 'active';
      setCategoriesSelect([...categoriesSelect, id]);
      setSearchParams({ categories: [...categoriesSelect, id].join('_') });
    }
  };

  useEffect(() => {
    const categories = [];
    searchParams.get('categories') &&
      searchParams
        ?.get('categories')
        .split('_')
        .forEach((idCategory) => {
          const li = document.querySelector(`#${idCategory}`);
          if (li) {
            li.className = 'active';
          }
          categories.push(idCategory);
        });
    categories.length > 0 && setCategoriesSelect(categories);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    categoriesSelect,
    handleSelectCategory,
  };
};

export default useCategoriesSelected;
