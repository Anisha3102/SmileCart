import Carousel from "./Carousel";
import { IMAGE_URLS } from "../constants";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../ui/Spinner";


function Product() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

 const fetchProduct = async () => {
   try {
     setIsLoading(true);
     const response = await axios.get(
       "https://smile-cart-backend-staging.neetodeployapp.com/products/infinix-inbook-2"
     );
     setProduct(response.data);
   } catch (error) {
     console.log("An error occurred:", error);
   } finally {
     setIsLoading(false);
   }
 };
   useEffect(() => {
     fetchProduct();
   }, []);
  
   if (isLoading) {
     return (
       <div className="flex h-screen w-full items-center justify-center">
         <Spinner />
       </div>
     );
   }
  
   const { name, description, mrp, offer_price } = product;
   const totalDiscounts = mrp - offer_price;
   const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);
  return (
    <div className="px-6 pb-6">
      <div>
        <p className="py-2 text-4xl font-semibold"> {name}</p>
        <hr className="border-2 border-black" />
      </div>
      <div className="flex gap-4 mt-6">
        <div className="w-2/5">
          <Carousel title="Infinix Inbook" imageUrls={IMAGE_URLS} />
        </div>
        <div className="w-3/5 space-y-4">
          <p>{description}</p>
          <p>MRP: {mrp}</p>
          <p className="font-semibold"> Offer price: {offer_price}</p>
          <p className="font-semibold text-green-600">
            {" "}
            {discountPercentage}% off
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
