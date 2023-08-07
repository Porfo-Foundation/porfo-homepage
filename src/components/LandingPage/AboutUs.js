import React from "react";

function AboutUs() {
  return (
    <div className="max-w-screen-xl mx-auto px-6 h-screen flex flex-col justify-center">
      <p className="font-medium text-center text-3xl xl:text-6xl leading-snug">We&apos;re a team of Traders, developers and crypto users</p>
      <p className="font-medium text-[#C8C8C8] text-center text-sm sm:text-xl px-2 sm:px-12 pt-8 pb-2 sm:pb-10">
        Porfo is a game-changer for both first-time users and seasoned traders in the cryptocurrency world. As a smart wallet and investment assistant, it simplifies the management of digital assets,
        making it easy for beginners to navigate the crypto landscape. For experienced traders, Porfo&apos;s AI-based chat assistant provides valuable trade recommendations and detailed insights into
        wallets, tokens, and transactions.
      </p>
      <p className="font-medium text-[#C8C8C8] text-center text-md sm:text-xl px-2 sm:px-12 pt-2 pb-12 sm:pb-20">
        The ability to create and manage sector-based portfolios or invest in pre-curated ones, including Real-World Assets, offers users a unique, tailored investment strategy. With Porfo, everyone
        can make informed decisions and optimize their cryptocurrency investments.
      </p>
      <div className="flex justify-center">
        <button onClick={() => window.open("https://porfo-waitlist.kickoffpages.com/", "_blank")} className="glowing-btn">
          <span class="glowing-txt">
            L<span class="faulty-letter">E</span>
            ARN M<span class="faulty-letter">O</span>
            <span class="faulty-letter">R</span>E
          </span>
        </button>
      </div>
    </div>
  );
}

export default AboutUs;
