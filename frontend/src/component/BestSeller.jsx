import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import Card from './Card';
import { shopDataContext } from '../context/ShopContext';

const BestSeller = () => {
  let { products } = useContext(shopDataContext);
  let [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
  const filteredProducts = products.filter(
    item => String(item?.bestseller ?? item?.bestSeller ?? item?.isBestSeller).toLowerCase() === 'true'
  );

  setBestSeller((filteredProducts.length ? filteredProducts : products).slice(0, 4));
}, [products]);

  return (
    <div>
      <div className="h-[8%] w-[100%] text-center mt-[50px]">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
          Tried, Tested, Loved — Discover our All-Time Best Sellers.
        </p>
      </div>

      <div className="w-[100%] h-[50%] mt-[120px] flex items-center justify-center flex-wrap gap-[50px]">
        {bestSeller.map((item) => (
          <Card
            key={item._id}
            name={item.name}
            image={item.image1}
            id={item._id}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;