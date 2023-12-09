'use client';

const PricingCard = () => {
  return (
    <div
      className="
        col-span-1 
        cursor-pointer 
        group 
        shadow-md 
        h-[40rem]
        w-[25rem]
        bg-neutral-800
        backdrop-filter
        backdrop-blur-lg 
        bg-opacity-60
        p-3 
        border-[1.5px] 
        border-opacity-10
        border-white
        rounded-lg
      "
    >
      <div className="flex flex-col gap-6 w-full h-full">
        {/* <div className=" 
                rounded-lg 
                h-[55%] 
                w-full
                bg-neutral-900
                backdrop-filter
                backdrop-blur-sm 
                bg-opacity-10
            ">
            
        </div> */}

        <div className="flex justify-between">
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="font-semibold text-2xl">Feature title</div>
            <div className="text-sm dark:text-[#adadad]">Lorem ipseum sat hhsldhsl hslhSLalks jakjhslSA JGASKJGJas gsahSJQH</div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
