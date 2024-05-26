import React, { useEffect, useState } from "react";

const AllServices = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const show = async () => {
      const resCategories = await fetch("http://localhost:3000/categories");
      const data = await resCategories.json();
      setCategories(data);
    };
    show();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center font-semibold">
        All Products {categories.length}
      </h1>
    </div>
  );
};

export default AllServices;
