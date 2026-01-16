import React from "react";

const Form = () => {
  const submithandler = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div>
      <form
        onSubmit={function (e) {
          submithandler(e);
        }}
        action=""
      >
        <input type="text" placeholder="Enter the text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
