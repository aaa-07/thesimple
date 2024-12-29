export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="flex items-center justify-center mb-8">
        <img src="/images/home/hero/bulb.svg" alt="bulb" width={35} height={35} className="md:mr-3 mr-1 hero-section__bulb" />
        We're product innovation studio
      </div>
      <div>
        <span className="font-medium">Where Creativity Swings, Innovation Slides, and </span>
        <span className="font-allura">Ideas Take Flight!</span>

        <img src="/images/home/hero/plane.svg" alt="plane" className="inline md:ml-5 ml-3" />
      </div>
      <div>We design tech products users cherish, businesses rely on, and investors envision</div>
      <div className="md:flex hidden">
        <button className="mr-6 md:flex p-4 hero-section__get-started-button">
          <div>Get started </div>
          <div className="md:w-8 md:h-6 relative overflow-x-hidden">
            <img src="/images/header/dotted-arrow.svg" alt="arrow" className="inline" width={24} height={24} />
            <img src="/images/header/dotted-arrow.svg" alt="arrow" className="inline" width={24} height={24} />
          </div>
        </button>
        <button>See our work</button>
      </div>
    </div>
  );
}
