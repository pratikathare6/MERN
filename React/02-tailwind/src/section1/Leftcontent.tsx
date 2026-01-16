import React from "react";

const Leftcontent = () => {
  return (
    <div className="h-full w-1/4 bg-white flex flex-col gap-10 px-6 justify-center  ">
      <div className="text-black-100 font-bold text-4xl leading-tight">
        Prospective <span className="text-gray-600 ">customer</span>{" "}
        segmentation
      </div>
      <div>
        Depending on customer satisfaction and acesses to banking products,
        potential target audience can be devided into three groups
      </div>

      <div className="flex mt-10 text-8xl">
        <i className="ri-arrow-right-up-long-fill"></i>
      </div>
    </div>
  );
};

export default Leftcontent;
