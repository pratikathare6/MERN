import React, { useEffect } from "react";
import { useState } from "react";
import { X } from "lucide-react";

const Frontend = () => {
  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");

  //append all the notes
  const [arr, setarr] = useState([]);

  //see the result only when component rerenders(updated)
  useEffect(() => {
    console.log("final output is ", arr);
  }, [arr]);

  const deletenote = (idx) => {
    const notes = [...arr];

    notes.splice(idx, 1);

    setarr(notes);
  };

  function Submithandler(e) {
    e.preventDefault();

    const notes = { title, details };

    setarr([...arr, notes]);

    //clear the inputs
    settitle("");
    setdetails("");
  }

  return (
    <div className="min-h-screen w-svw xl:flex  bg-black">
      <div className="w-1/2 xl:border-r-2 border-white p-3 md:w-full sm:w-full">
        <h1 className="text-5xl font-bold m-2 text-white">Add Notes</h1>

        <form className="flex flex-col  p-4  gap-2" action="">
          {/* Title */}
          <input
            className="border-2  text-white  h-12  "
            type="text"
            placeholder="Enter the title"
            value={title}
            onChange={function savetitle(e) {
              settitle(e.target.value);
            }}
          />

          {/* Description */}
          <textarea
            className="border-2 h-70 text-white"
            name=""
            id=""
            placeholder="Enter the details"
            value={details}
            onChange={function savetitle(e) {
              setdetails(e.target.value);
            }}
          ></textarea>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              className="border-2 p-2 rounded m-2 w-30  text-black bg-white active:scale-95 active:shadow-inner transform transition-all"
              onClick={function (e) {
                Submithandler(e);
              }}
            >
           
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className=" w-1/2 md:w-full sm:w-full sm:h-full">
        <h1 className="text-5xl font-bold m-1 mt-4 text-white ml-4">
          Recent Notes
        </h1>

        <div className=" grid grid-cols-3 gap-1 p-4 lg:grid-cols-3 sm:grid-cols-2 ">
          {arr.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-cover w-50 h-50  border-2 text-black bg-[url('https://cdn.vectorstock.com/i/1000v/59/32/sheet-lined-a4-size-paper-for-notes-isolated-vector-28995932.jpg')] overflow-scroll rounded-2xl"
              >
                <h2
                  onClick={() => {
                    deletenote(idx);
                  }}
                  className="bg-red-500 absolute text-7xl  m-1 rounded-full"
                >
                  <X strokeWidth={3} />
                </h2>
                <div className="text-2xl p-1 font-bold pl-2">{elem.title} </div>
                <div className="p-1 pl-2 text-slate-700">{elem.details}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
