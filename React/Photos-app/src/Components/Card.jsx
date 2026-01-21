import React from "react";

const Card = (props) => {
  return (
    <div >
       
      <a href={props.elem.url} target="_blank">
        <div className="overflow-hidden">
          <img
            className="h-30 w-full p-1 object-cover"
            src={props.elem.download_url}
            alt=""
          />
          <h1 className="flex items-center justify-center">
            {props.elem.author}
          </h1>
        </div>
      </a>
    </div>
  );
};

export default Card;
