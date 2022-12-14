import React from "react";
import "./Category.css";

const categories = [
  {
    id: 1,
    name: "Plants",
    img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Plants_R.png?v=1661741653",
  },

  {
    id: 2,
    name: "Seeds",
    img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Seeds_R.png?v=1661741675",
  },

  {
    id: 3,
    name: "Planters",
    img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Planters_R.png?v=1661741699",
  },

  {
    id: 4,
    name: "Plant Care",
    img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Plant_Care_R.png?v=1661741723",
  },
];

function Category() {
  return (
    <div className="home-category-container">
      <h2 className="section-heading"> What are you looking for ? </h2>
      <div className="category-row">
        {categories.map((category) => (
          <div className="category-card" key={category.id}>
            <img src={category.img}></img>
            <h4>{category.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
