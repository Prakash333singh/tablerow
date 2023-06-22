import React from "react";
function TableRow({number,index}){
    return(
    <div className="p-2 text-xl text-indigo-400">
        {number}*{index}={number*index}
    </div>
    );
}
export default TableRow;