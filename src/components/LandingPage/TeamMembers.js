import React from "react";

function TeamMembers() {
  const team = [
    {
      name: "Name",
      role: "Founder",
      image: "/landing-page/memoji-1.png",
    },
    {
      name: "Name",
      role: "CEO",
      image: "/landing-page/memoji-2.png",
    },
    {
      name: "Name",
      role: "CFO",
      image: "/landing-page/memoji-2.png",
    },
    {
      name: "Name",
      role: "Founder",
      image: "/landing-page/memoji-1.png",
    },
    {
      name: "Name",
      role: "CEO",
      image: "/landing-page/memoji-2.png",
    },
    {
      name: "Name",
      role: "CFO",
      image: "/landing-page/memoji-2.png",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto px-6 min-h-screen flex flex-col justify-center">
      <p className="font-bold text-5xl mb-16">Our Team Members</p>
      <div className="grid grid-cols-6 gap-x-12 gap-y-8">
        {team?.map((member, index) => (
          <div key={index} className="col-span-2 bg-[rgba(77,74,74,0.27)] rounded-xl flex flex-col items-center py-6">
            <img src={member.image} className="rounded-full" />
            <p className="font-medium text-[#DAD5D5] mt-3">{member.name}</p>
            <p className="text-sm opacity-70 mb-3">{member.role}</p>
            <div className="flex gap-x-6 bg-[rgba(255,255,255,0.04)] px-6 py-3 rounded-full">
              <button>
                <img src="/landing-page/facebook.svg" />
              </button>
              <button>
                <img src="/landing-page/instagram.svg" />
              </button>
              <button>
                <img src="/landing-page/twitter.svg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMembers;
