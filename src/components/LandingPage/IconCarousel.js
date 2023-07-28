import { useEffect, useRef, useState } from "react";

const IconCarousel = ({ iconUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollOffsetValue = 64;
  const scrollTimer = 3000;
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  useEffect(() => {
    let init = 0;
    const timer = setInterval(() => {
      if (init < iconUrls.length / 2) {
        scroll(scrollOffsetValue);
        init++;
        setActiveIndex(init);
      } else {
        scroll(-scrollOffsetValue * iconUrls.length);
        init = 0;
        setActiveIndex(init);
      }
    }, scrollTimer);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="flex overflow-x-scroll w-[320px] scroll-smooth no-scrollbar" ref={ref}>
      {iconUrls.map((iconUrl, index) => {
        const centerImage = iconUrl.replace(".svg", "-white.svg");
        return <img key={index} src={index == activeIndex + 2 ? centerImage : iconUrl} alt={`Icon ${index}`} className="w-12 h-12 px-2 mx-2 aspect-square" />;
      })}
    </div>
  );
};

export default IconCarousel;
