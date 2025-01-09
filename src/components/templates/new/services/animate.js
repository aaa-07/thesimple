import { useEffect, useRef, useState } from "react";

export default function Animate() {
  const ref = useRef();
  const [height, setHeight] = useState(24);
  const [width, setWidth] = useState(72);
  const [marginRight, setMargin] = useState(312);
  const [top, setTop] = useState(147);
  const [lineWidth, setLineWidth] = useState(455);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    // handleScroll();
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const doc = document.documentElement;
    // console.log(ref.current.getBoundingClientRect());
    if (ref.current.getBoundingClientRect().top > 0) {
      return;
    }

    const height = doc.clientHeight;
    const scrollHeight = 1.5 * height;
    const top = doc.scrollTop;
    // console.log(top);

    const fraction = (top - 4368) / (scrollHeight - height);
    // console.log(height, scrollHeight, top);
    // console.log(fraction);
    if (fraction > 1) {
      setScale(Math.max(0.5, 2 - fraction));
    } else {
      setScale(1);
    }

    const imgWidth = 72 + 512 * Math.min(fraction, 1);
    const imgHeight = 24 + 174 * Math.min(fraction, 1);
    const imgTop = 147 - 87 * Math.min(fraction, 1);
    const margin = 312 - 312 * Math.min(fraction, 1);
    const lineWidth = 455 + 705 * fraction;

    setTop(imgTop);
    setHeight(imgHeight);
    setWidth(imgWidth);
    setMargin(margin);
    setLineWidth(lineWidth);

    // const top = doc.scrollTop - 4365;
    // const percent = (top + 100) / 100;
    // if (top < 0) {
    //   return;
    // }
    // if (percent > 8) {
    //   setHeight((state) => 24 * 8);
    //   setWidth((state) => 72 * 8);
    //   setMargin(() => 53.5 * 8);
    //   setTop((state) => 8 * 8);
    //   setLineWidth(() => 455 + 100 * 7);
    //   return;
    // }
    // setHeight((state) => 24 * percent);
    // setWidth((state) => 72 * percent);
    // setMargin(() => 53.5 * percent);
    // setTop((state) => 8 * percent);
    // setLineWidth(() => 455 + 100 * (percent - 1));
  };

  return (
    <div className="md:flex justify-center hidden services-section__shade" ref={ref}>
      <div className="animate-container">
        <div className="text-left" style={{ marginLeft: marginRight, paddingTop: `${scale < 1 ? `${110 * (1 - scale)}vh` : 0}` }}>
          <div className="relative">
            <div
              className="animate-container__first"
              style={{
                fontSize: `${72 * scale}px`,
                lineHeight: `${81 * scale}px`,
              }}
            >
              Fuelling innovation,
            </div>
            <div
              className="animate-container__second font-allura"
              style={{
                fontSize: `${64 * scale}px`,
                lineHeight: `${81 * scale}px`,
              }}
            >
              exceeding expectations
            </div>
            <div
              className="animate-container__third font-roboto gray-9"
              style={{
                fontSize: `${32 * scale}px`,
                lineHeight: `${40 * scale}px`,
              }}
            >
              Let's push boundaries together.
            </div>
            <div className="flight w-max" style={{ top: `${top}px`, left: "600px", opacity: `${scale < 1 ? 0 : 1}`, transition: "opacity 0.5s ease-out" }}>
              <img className="animate-container__img" src="/images/home/services/flight.svg" alt="flight" style={{ height: height, width: width }} />
            </div>
            <div className="animate-container__line" style={{ width: `${lineWidth}px`, opacity: `${scale < 1 ? 0 : 1}`, transition: "opacity 0.5s ease-out" }} />
            <img
              src="/images/home/services/plane.svg"
              alt="plane"
              className="animate-container__plane"
              style={{ left: `${lineWidth + 10}px`, opacity: `${scale < 1 ? 0 : 1}`, transition: "opacity 0.5s ease-out" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
