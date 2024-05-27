import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ category }) => {
  const [hide, setHide] = useState(false);
  const { id, price, title, description } = category;

  return (
    <div className="card w-96 py-7 px-5 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="">
        <h2 className="card-title">{title}</h2>
        <p className="text-2xl font-semibold text-orange-500">${price}</p>
        <p className="text-base  text-black">
          {description?.length > 5 ? (
            <p>
              {description?.slice(0, 10)}{" "}
              <span onClick={() => setHide(!hide)}>
                <span>{hide ? description : description.slice(0, 5)}</span>
                <span className="hover:underline cursor-pointer text-orange-600">
                  {hide ? "" : " see "}
                </span>
              </span>
            </p>
          ) : (
            description
          )}
        </p>
        <div className="card-actions justify-center">
          <Link to={`/service/${id}`}>
            <button className="btn btn-primary">View</button>
          </Link>
          <Link to={`/service-edit/${id}`}>
            <button className="btn btn-info">edit</button>
          </Link>
          <button className="btn btn-error">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
