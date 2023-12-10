import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminPortal = () => {
  
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    imageSrc: "",
    title: "",
    desc: "",
    price: "",
    category: "general",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = import.meta.env.VITE_API_BASE_URL;
      const response = await fetch(`${apiUrl}/crud/addgame`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, timestamp: new Date() }),
      });

      const data = await response.json();
      console.log("Success:", data);

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-8">
        <div className="bg-cgrey p-8 rounded-lg ">
          <br />
          <h1 className="text-2xl text-caccent text-center font-semibold mb-4">
            Upload Game Data
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="imageSrc"
                className="block text-sm font-medium text-chighlights"
              >
                Image Url
              </label>
              <input
                type="text"
                id="imageSrc"
                name="imageSrc"
                value={formData.imageSrc}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-chighlights"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="desc"
                className="block text-sm font-medium text-chighlights"
              >
                Description
              </label>
              <textarea
                id="desc"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                rows="3"
                className="mt-1 p-2 w-full border rounded-md"
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-chighlights"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-chighlights"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              >
                <option value="free">Free</option>
                <option value="multiplayer">Multiplayer</option>
                <option value="action">Action</option>
                <option value="general">General</option>
                <option value="adventure">Adventure</option>
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex items-center text-chighlights bg-caccent hover:bg-orange-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Upload Game
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
