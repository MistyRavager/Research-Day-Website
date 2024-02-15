import React from "react";

const Message = () => {
  return (
    <div className="bg-white flex flex-row items-center justify-center gap-10 ">
      {[1, 2, 3].map((index, item) => (
        <div
          className="bg-black/70 p-5 rounded-lg flex flex-col gap-5 items-center shadow-lg text-white"
          key={index}
        >
          <img
            src="https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg"
            alt="director image"
            className="w-[10rem] h-[10rem]"
          />
          <h3 className="text-[1.3rem]">Message from Director</h3>
          <p className="text[1.1rem]">Coming Soon!</p>
        </div>
      ))}
    </div>
  );
};

export default Message;
