import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-t from-[#a33b6f36] to-black">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-12 text-[#727272] py-40">
        <div className="col-span-6">
          <img src="/logo.svg" className="mb-4" />
          <p>On-Chain Search</p>
          <p>Made Easy</p>
          <div className="flex gap-x-5 mt-20">
            <button>
              <img src="/landing-page/discord-white.svg" />
            </button>
            <button>
              <img src="/landing-page/instagram-white.svg" />
            </button>
            <button>
              <img src="/landing-page/facebook-white.svg" />
            </button>
            <button>
              <img src="/landing-page/twitter-white.svg" />
            </button>
          </div>
        </div>
        <div className="col-span-3 font-medium">
          <p className="text-white font-bold mb-6 text-xl mt-3">Contact Us</p>
          <p className="mb-2">abcdefsdfs@gmail.com</p>
          <p>+919868686572</p>
        </div>
        <div className="col-span-3 font-medium">
          <p className="text-white font-bold mb-6 text-xl mt-3">Important Links</p>
          <p className="mb-2">Documentation</p>
          <p className="mb-2">Support</p>
          <p>API</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
