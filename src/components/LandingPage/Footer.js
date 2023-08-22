import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-t from-[#a33b6f36] to-black">
      <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-12 text-[#727272] pt-40 pb-16 2xl:pb-40 gap-y-8 text-sm sm:text-base">
        <div className="col-span-12 sm:col-span-4 lg:col-span-6 flex flex-row justify-between items-center sm:items-start sm:flex-col">
          <div>
            <img src="/logo.png?v=1.0.1" className="mb-4 w-40" />
            <p>On-Chain Search</p>
            <p>Made Easy</p>
          </div>
          <div className="flex gap-x-5 mt-0 sm:mt-20">
            <button onClick={() => window.open("https://discord.gg/6z7qBFDJ", "_blank")}>
              <img src="/landing-page/discord-white.svg" />
            </button>
            <button>
              <img src="/landing-page/instagram-white.svg" />
            </button>
            <button>
              <img src="/landing-page/facebook-white.svg" />
            </button>
            <button onClick={() => window.open("https://x.com/0xporfo", "_blank")}>
              <img src="/landing-page/twitter-white.svg" />
            </button>
          </div>
        </div>
        {/* <div className="col-span-7 sm:col-span-4 lg:col-span-3 font-medium">
          <p className="text-white font-bold mb-6 text-base sm:text-xl mt-3">Contact Us</p>
          <p className="mb-2">abcdefsdfs@gmail.com</p>
          <p>+919868686572</p>
        </div> */}
        <div className="col-span-5 sm:col-span-4 lg:col-span-3 font-medium">
          <p className="text-white font-bold mb-6 text-base sm:text-xl mt-3">Important Links</p>
          <button className="mb-2" onClick={() => window.open("https://porfo.gitbook.io/v1/introduction/what-is-porfo", "_blank")}>
            Documentation
          </button>
          <p className="mb-2">Support</p>
          <p>API</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
