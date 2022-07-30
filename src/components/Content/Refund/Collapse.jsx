import React from "react";

export default function Collapse(props) {

const collapse = () =>{
  //code here
}
  

  return (
    <div className="d-flex flex-column container">
      <div onClick={collapse} style={{cursor:"pointer"}} className="collapse border-top border-bottom py-2 d-flex flex-column user-select-none">
        <div className="d-flex justify-content-between">

        <span className="text-capitalize">
{props.title}
        </span>
        <span>
          <i class="bi bi-caret-down-fill"></i>
        </span>
        </div>
        <p className="d-none collapse-paragraph">{props.paragraph}</p>
      </div>
    </div>
  );
}
