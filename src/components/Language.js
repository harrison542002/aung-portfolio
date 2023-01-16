import React from "react";

function Language() {
  return (
    <div className="bg-black text-white lg:px-40 px-10 pt-20" id="lang">
      <div className="border-4 p-7 rounded-lg shadow-lg shadow-purple-200">
        <h1 className="text-center text-white text-2xl pb-2">
          Comprehensive Languages
        </h1>
        <div className="flex justify-center">
          <div className="border-t-4 border-white border-double w-80"></div>
        </div>
        <div className="flex justify-center text-xl lg:text-2xl space-x-5 mt-5">
          <div className="text-center">
            <h1>Burmese</h1>
            <h1 className="text-6xl">🇲🇲</h1>
          </div>
          <div className="text-center">
            <h1>English</h1>
            <h1 className="text-6xl">🇬🇧</h1>
          </div>
          <div className="text-center">
            <h1>Chinese</h1>
            <h1 className="text-6xl">🇨🇳</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
