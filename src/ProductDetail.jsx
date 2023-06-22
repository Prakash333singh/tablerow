import React from "react";

function ProductDetail()
{
    return(
        <>
    
      <img width={400} height={600} src="71rD6iXLRKL._SL1500_.jpg" />
      <h1 className="text-2xl text-indigo-600 ">Black Printed coffee Mug</h1>
      <input className="border border-gray-700 rounded-md w-8 my-10 mx-2" type="text" value="1"/>
      <button className="text-white mx-4 py-2 px-4 bg-indigo-700">Add to cart</button>
      </>
    );
}
export default ProductDetail;