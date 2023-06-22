import React, { useState } from "react";
import ProductList from "./ProductList";
import Product from "./Product";
// function App(){
//   // return (
//   //   <div className="flex gap-3">
//   //     <Table></Table>
//   //     <Table></Table>
//   //   </div>
//   // );
//   console.log("App Function running");

//   const [flip,setFlip]=useState(false);

//   let key1='table1';
//   let key2='table2';

// if(flip){
//   key1='table2';
//   key2='table1';
// }

// function flipkey()
// {
//   setFlip(!flip);
// }
// return (
//     <div className="flex gap-6">
//       <Table key={key1}></Table>
//       <Table key={key2}></Table>
//       <button onClick={flipkey} className="rounded-md px-4 py-1 bg-indigo-700 text-white flex-row">Flip key</button>
//     </div>
//   );
//   }


 {/* <Product  title="Awesome coffee Mug" price={40}/> */}
    {/* <Hello/>
    <div>value of {a} </div> */}
    {/* <ProductDetail></ProductDetail> */}


    // import a,{Product,Hello} from "./Product";
// import Product from "./Product";
// import ProductDetail from "./ProductDetail";
function App(){
   console.log("app function Running");
   const [query,setQuery]=useState("");
   const [sort,setSort]=useState("default");
  
  const allData=[

    {
      title:"Black Printed coffee Mug",
      price:"15",
      imgUrl:"coffee-5232698_1280.jpg",
      category:"Mug",
    },
    {
      title:"white Printed coffee Mug",
      price:"19",
      imgUrl:"coffee-5232698_1280.jpg",
      category:"Mug",
    },
    {
      title:"black printed t-shirt",
      price:"39",
      imgUrl:"coffee-5232698_1280.jpg",
      category:"t-shirts",
    },
  ];

//const data=allData;
const [data,setData]=useState(allData);

 function handleChange(event){
  const newQuery=event.target.value;

  const newData=allData.filter(function(item){
    return item.title.toLowerCase().indexOf(newQuery.toLowerCase())!=-1;
  });

console.log("new data is",data);

  setQuery(newQuery);
   setData(newData);
 }
  function handleSortChange(event){
    setSort(event.target.value);
  }

  return(
    <div className="p-2">
 <input
 value={query}
 placeholder="Search"
 className="border border-gray-700 rounded-md mb-2 p-2"
 onChange={handleChange}
 />
 <select onChange={handleSortChange} className="border border-gray-700 rounded-md mb-2 ml-2" value={sort}>
  <option value="default">default sort</option>
  <option value="name">sort by name</option>
  <option value="Price">sort by price</option>
 </select>
    <ProductList products={data}/>
    </div>
  );
}
export default App;