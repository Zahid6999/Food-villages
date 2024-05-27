import axios from "axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Edit = () => {
  const data = useLoaderData();

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const img = form.img.value;
    const text = form.text.value;
    const editData = { title, price, img, text };

    const result = await axios.patch(
      `http://localhost:3000/recipes/${data.id}`,
      editData
    );
    if (result) {
      Swal.fire("Edit successFully");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-orange-700 text-center">
        Edit
      </h2>
      <form
        onSubmit={handleForm}
        className="space-y-4  flex flex-col my-5 lg:ml-[500px]"
      >
        <input
          type="text"
          placeholder="Title"
          className="font-semibold input input-bordered input-success w-full max-w-lg "
          name="title"
          defaultValue={data?.title}
        />

        <input
          type="text"
          placeholder="Price"
          defaultValue={data?.price}
          className="font-semibold input input-bordered input-success w-full max-w-lg"
          name="price"
        />
        <input
          type="text"
          placeholder="Img URL"
          className="font-semibold input input-bordered input-success w-full max-w-lg"
          name="img"
        />
        <textarea
          className="textarea textarea-accent max-w-lg"
          placeholder="Description"
          defaultValue={data?.description}
          name="text"
        ></textarea>

        <input
          type="submit"
          className="btn btn-success  max-w-lg"
          value="Confirm"
        />
      </form>
    </div>
  );
};

export default Edit;
