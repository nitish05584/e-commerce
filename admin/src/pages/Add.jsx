import React, { useContext, useState } from "react";
import Nav from "../component/Nav";
import Sidebar from "../component/Sidebar";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

const Add = () => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("TopWear");
  const [price, setPrice] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const { serverUrl } = useContext(authDataContext);

  const handleAddProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      formData.append("image1", image1);
      formData.append("image2", image2);
      formData.append("image3", image3);
      formData.append("image4", image4);

      const result = await axios.post(
        serverUrl + "/api/product/addproduct",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      console.log(result.data);

      if (result.data) {
        setName("");
        setDescription("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice("");
        setBestSeller(false);
        setCategory("Men");
        setSubCategory("TopWear");
        setSizes([]);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vw] min-h-[100vh] bg-gradient-to-b from-[#141414] to-[#0c2025] text-white overflow-x-hidden relative">

      <Nav />
      <Sidebar />

      <div className="w-[82%] h-full flex items-start justify-start overflow-x-hidden absolute right-0 bottom-[7%]">

        <form
          onSubmit={handleAddProduct}
          className="w-full md:w-[90%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]"
        >

          <div className="text-[24px] md:text-[40px]">Add Product Page</div>

          {/* Upload Images */}

          <div className="w-[80%] flex flex-col gap-[10px] mt-[20px]">

            <p className="text-[20px] md:text-[25px] font-semibold">
              Upload Images
            </p>

            <div className="flex gap-[10px] flex-wrap">

              {[image1, image2, image3, image4].map((img, index) => {

                const setters = [setImage1, setImage2, setImage3, setImage4];

                return (
                  <label
                    key={index}
                    htmlFor={`image${index + 1}`}
                    className="w-[100px] h-[100px] cursor-pointer"
                  >

                    <img
                      src={
                        !img
                          ? "https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
                          : URL.createObjectURL(img)
                      }
                      alt=""
                      className="w-full h-full object-cover rounded-lg border-2"
                    />

                    <input
                      type="file"
                      id={`image${index + 1}`}
                      hidden
                      accept="image/*"
                      onChange={(e) =>
                        setters[index](e.target.files[0])
                      }
                    />

                  </label>
                );
              })}

            </div>
          </div>

          {/* Product Name */}

          <div className="w-[80%] flex flex-col gap-[10px]">

            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Name
            </p>

            <input
              type="text"
              placeholder="Type here"
              className="w-[600px] max-w-[98%] h-[40px] rounded-lg border-2 bg-slate-600 px-[20px] outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

          </div>

          {/* Description */}

          <div className="w-[80%] flex flex-col gap-[10px]">

            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Description
            </p>

            <textarea
              placeholder="Type here"
              className="w-[600px] max-w-[98%] h-[100px] rounded-lg border-2 bg-slate-600 px-[20px] py-[10px] outline-none"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />

          </div>

          {/* Category */}

          <div className="w-[80%] flex gap-[20px] flex-wrap">

            <div className="flex flex-col gap-[10px]">

              <p className="text-[20px] md:text-[25px] font-semibold">
                Product Category
              </p>

              <select
                className="bg-slate-600 px-[10px] py-[7px] rounded-lg border-2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >

                <option value="Men">Men</option>
                <option value="Women">Women</option>
                <option value="Kids">Kids</option>

              </select>

            </div>

            <div className="flex flex-col gap-[10px]">

              <p className="text-[20px] md:text-[25px] font-semibold">
                Sub Category
              </p>

              <select
                className="bg-slate-600 px-[10px] py-[7px] rounded-lg border-2"
                value={subCategory}
                onChange={(e) => setSubCategory(e.target.value)}
              >

                <option value="TopWear">TopWear</option>
                <option value="BottomWear">BottomWear</option>
                <option value="WinterWear">WinterWear</option>

              </select>

            </div>

          </div>

          {/* Price */}

          <div className="w-[80%] flex flex-col gap-[10px]">

            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Price
            </p>

            <input
              type="number"
              placeholder="₹ 200"
              className="w-[600px] max-w-[98%] h-[40px] rounded-lg border-2 bg-slate-600 px-[20px]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

          </div>

          {/* Sizes */}

          <div className="w-[80%] flex flex-col gap-[10px]">

            <p className="text-[20px] md:text-[25px] font-semibold">
              Product Size
            </p>

            <div className="flex gap-[15px] flex-wrap">

              {["S", "M", "L", "XL", "XXL"].map((size) => (

                <div
                  key={size}
                  className={`px-[20px] py-[7px] rounded-lg border-2 cursor-pointer ${
                    sizes.includes(size)
                      ? "bg-green-400 text-black"
                      : "bg-slate-600"
                  }`}
                  onClick={() =>
                    setSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((item) => item !== size)
                        : [...prev, size]
                    )
                  }
                >
                  {size}
                </div>

              ))}

            </div>

          </div>

          {/* Bestseller */}

          <div className="w-[80%] flex items-center gap-[10px]">

            <input
              type="checkbox"
              checked={bestSeller}
              onChange={(e) => setBestSeller(e.target.checked)}
              className="w-[20px] h-[20px]"
            />

            <label className="text-[18px]">
              Add to BestSeller
            </label>

          </div>

          <button className="w-[140px] py-[10px] rounded-xl bg-[#65d8f7] text-black font-semibold">
            Add Product
          </button>

        </form>

      </div>
    </div>
  );
};

export default Add;