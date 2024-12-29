export default function GrowthSection() {
  return (
    <div className="container flex justify-center">
      <div className="growth-section flex flex-wrap">
        <div className="growth-section__card">
          <img src="/images/home/growth/1.svg" alt="1" height={44} width={300} />
          <div className="text-center">228% ROI</div>
          <div className="font-roboto text-center">Design lead strategies</div>
        </div>
        <div className="growth-section__card">
          <img src="/images/home/growth/2.svg" alt="1" height={44} width={300} />
          <div className="text-center">33% Growth</div>
          <div className="font-roboto text-center">Strong branding boosts revenue</div>
        </div>
        <div className="growth-section__card md:mt-0 mt-16">
          <img src="/images/home/growth/2.svg" alt="1" height={44} width={300} />
          <div className="text-center">88% Drop</div>
          <div className="font-roboto text-center">Poor UX drives user churn</div>
        </div>
        <div className="growth-section__card md:mt-0 mt-16">
          <img src="/images/home/growth/2.svg" alt="1" height={44} width={300} />
          <div className="text-center">70% Boost</div>
          <div className="font-roboto text-center">Optimised UX</div>
        </div>
      </div>
    </div>
  );
}
