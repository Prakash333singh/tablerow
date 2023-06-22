import React from "react";
import {useState} from "react";
import TableRow from "./TableRow";

const data={
  table1:2,
  table2:2
} 

//let num=2;
function Table()
{
 // const [a,setA]=useState(0);

 console.log("table function running");

 const [num,updateNum]=useState(2);
  function nextTable() {
    console.log("nextTable called");
    
    //num++;
    updateNum(num+1);


    //setA(a+1);  //inform react that something has changed
  }

  return(
    <div className="p-2">
     
    <TableRow number={num} index={1}/>
    <TableRow number={num} index={2}/>
    <TableRow number={num} index={3}/>
    <TableRow number={num} index={4}/>
    <button onClick={nextTable} className="rounded-md px-4 py-1 bg-indigo-700 text-white">
        Next
      </button>
    </div>
  );
  
}
 export default Table;