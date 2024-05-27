import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleService = () => {
  const singleData = useLoaderData();
  const { id, price, title, description } = singleData;
  console.log(singleData);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">${price}</button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
