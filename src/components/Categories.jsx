import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const Categories = React.memo(function Categories({
  activeCategory, 
  items,
  onClickCategory,
}) {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/categories');
      setCategories(response.data); 
    } catch (error) {
      console.error('There was an error fetching the categories:', error);
    }
  };

  useEffect(() => {
   
    fetchCategories();
  }, []); 
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {categories &&
          categories?.map((item, index) => (
            <li
              className={activeCategory === item.id ? "active" : ""}
              onClick={() => onClickCategory(item.id)}
              key={`${item.name}_${index}`}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
items: PropTypes.arrayOf(PropTypes.string).isRequired,
onClickCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;