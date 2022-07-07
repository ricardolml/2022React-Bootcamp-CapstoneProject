import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const useCategoriesSelected = (isLoading) => {
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

  const handleClearCategoriesSelect = () => {
    categoriesSelect.forEach(
      (category) => (document.querySelector(`#${category}`).className = '')
    );
    setCategoriesSelect([]);
    setSearchParams([]);
  };

  useEffect(() => {
    const categories = [];
    if (!isLoading) {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return {
    categoriesSelect,
    handleSelectCategory,
    handleClearCategoriesSelect,
  };
};

export default useCategoriesSelected;
