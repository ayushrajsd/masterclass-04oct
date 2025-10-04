import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header({ selectedCategory, setSelectedCategory }) {
  //   const categories = ["electronics", "clothes", "shoes", "furniture"];

  const [categories, setCategories] = useState([]);
  const { cart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/categories")
      // fetch("https://fakeapi.platzi.com/en/rest/categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="header-container">
      <div className="header-items">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className={
              "header-item " +
              (category === selectedCategory ? "header-item--selected" : "")
            }
          >
            {" "}
            {category.name}
          </div>
        ))}
        <div className="shopping-cart">
          😍 <span className="shopping-cart">{cart.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
