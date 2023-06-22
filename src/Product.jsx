import React from "react";

// export function Product()
// {
//   return <div className="text-red-600">I am a Product</div>;
// }
// export function Hello(){
//   return <div className="text-indigo-400">Hello world!!</div>;
// }



 function Product({title,price,category,imgUrl}){
  return(
   <div className="bg-red-500 p-2 rounded-md">
    <img className="w-20" src={imgUrl}/>
    <div>{category}</div>
    <div>{title}</div>
    <div>Rs.{price}</div>
   </div>
  );
}

export default Product;

//const a=10;
//export default a;
//named export and default export  