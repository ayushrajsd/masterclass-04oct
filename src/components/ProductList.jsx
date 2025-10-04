import { useState, useEffect } from "react";
import Product from "./Product";

function LoadingCard() {
  return (
    <div className="loading-card">
      <div
        style={{ height: "200px", marginBottom: "1rem" }}
        className="loading-shimmer"
      ></div>
      <div
        style={{ height: "20px", marginBottom: "0.5rem" }}
        className="loading-shimmer"
      ></div>
      <div
        style={{ height: "20px", width: "60%" }}
        className="loading-shimmer"
      ></div>
    </div>
  );
}

function ProductList({ selectedCategory }) {
  // furniture
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let url = "http://localhost:5000/api/v1/products";
    if (selectedCategory) {
      url = `http://localhost:5000/api/v1/products/?categorySlug=${selectedCategory.slug}`;
    }
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [selectedCategory]);
  if (loading) {
    //false
    // return <div className="loading">Loading ...</div>;
    return (
      <div className="products">
        {Array.from({ length: 6 }).map(
          (
            _,
            i // [undefined,undefined,]
          ) => (
            <LoadingCard key={i} />
          )
        )}
      </div>
    );
  }
  return (
    <div className="products">
      {/* {selectedCategory && selectedCategory.slug} */}
      {products.map((p) => (
        <Product
          id={p.id}
          title={p.title}
          image={p.images}
          price={p.price}
          key={p.id}
        />
      ))}
    </div>
  );
}

export default ProductList;
