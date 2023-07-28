import React from "react";

function GetStartedModal() {
  return (
    <div className="bg-[url('/get-started/background.png')] bg-cover flex">
      <div className="w-full md:max-w-[400px] lg:max-w-[500px] bg-black bg-opacity-70 flex flex-col justify-center">
        <div className="px-4 sm:px-12">
          <img src="/logo.svg" />
          <p className="text-xl font-medium my-12">Nice to see you again</p>
          <input className="w-full text-lg px-2 py-2 rounded-md !outline-none text-black mb-6" placeholder="Name" />
          <input className="w-full text-lg px-2 py-2 rounded-md !outline-none text-black mb-16" placeholder="Email" />
          <button className="w-full text-center bg-[#007AFF] py-2 rounded hover:opacity-70 transition-all">Join Wishlist</button>
          <div className="h-px w-full bg-[#E5E5E5] mt-10"></div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-end w-full">
        <img src="/get-started/hero.png" />
      </div>
    </div>
  );
}

export default GetStartedModal;
