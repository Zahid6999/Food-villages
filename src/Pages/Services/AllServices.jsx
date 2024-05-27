import React, { useEffect, useState } from "react";
import ProductCard from "./Services/ProductCard";

const AllServices = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const show = async () => {
      const resCategories = await fetch("http://localhost:3000/recipes");
      const data = await resCategories.json();
      setRecipes(data);
    };
    show();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold">All Products</h1>

      <section className="flex flex-wrap justify-center gap-5 my-10">
        {recipes?.map((recipes) => (
          <ProductCard key={recipes.id} category={recipes} />
        ))}
      </section>
    </div>
  );
};

export default AllServices;
