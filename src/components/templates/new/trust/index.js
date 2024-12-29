const TRUST_DATA = [
  {
    title: "15%",
    description: "lift in revenue per user",
    image: "/images/home/trust/1.svg",
    description2: "Conversion First Design",
    description3: "Is your product getting visitors but no traction? We design to convert every interaction into meaningful action.",
  },
  {
    title: "4x",
    description: "faster got to market",
    image: "/images/home/trust/2.svg",
    description2: "Focused, Results oriented",
    description3: "Is your product getting visitors but no traction? We design to convert every interaction into meaningful action.",
  },
  {
    title: "35%",
    description: "higher engagement",
    image: "/images/home/trust/3.svg",
    description2: "Animations that tells story",
    description3: "Is your product getting visitors but no traction? We design to convert every interaction into meaningful action.",
  },
  {
    title: "40%",
    description: "more scalability",
    image: "/images/home/trust/4.svg",
    description2: "Growth Driven Design",
    description3: "Is your product getting visitors but no traction? We design to convert every interaction into meaningful action.",
  },
  {
    title: "3x",
    description: "your success",
    image: "/images/home/trust/5.svg",
    description2: "Achieve Success at a Rapid Pace",
    description3: "Is your product getting visitors but no traction? We design to convert every interaction into meaningful action.",
  },
  {
    title: "50%",
    description: "fewer redesigns",
    image: "/images/home/trust/6.svg",
    description2: "Solutions Built for Tomorrow",
    description3: "Worried your designs won’t age well? We future proof your product, so it thrives in an ever changing market.",
  },
  {
    title: "8%",
    description: "increase in NPS",
    image: "/images/home/trust/7.svg",
    description2: "Every Interaction Counts",
    description3: "Frustrated users dropping off? Every touchpoint we design turns confusion into clarity and keeps users engaged. ",
  },
  {
    title: "95%",
    description: "client satisfaction",
    image: "/images/home/trust/8.svg",
    description2: "Scaling Enterprise Success",
    description3: "Not able to scale? Solutions that empower enterprises to adapt, grow, and thrive in an ever-evolving market",
  },
];

export default function TrustSection() {
  return (
    <div className="container flex justify-center">
      <div className="trust-section md:pl-0 pl-4">
        <div className="md:text-xl text-sm leading-8 md:mb-5 mb-2">Losing Users costing you?</div>
        <div className="md:flex md:mb-14 mb-10">
          <div>
            <div>Users judge fast; Regaining</div> <div className="font-allura">users trust is Hard</div>
          </div>
          <div className="text-sm md:text-lg leading-6 md:self-center">Our designs make users feel valued right away, turning first impressions into lasting relationships.</div>
        </div>
        <div className="flex md:flex-wrap overflow-auto md:gap-5 gap-3">
          {TRUST_DATA.map((data, index) => (
            <div key={index}>
              <div className="trust-section__card">
                <div>{data.title}</div>
                <div className="font-roboto">{data.description}</div>
                <div>{data.description2}</div>
                <div className="font-roboto">{data.description3}</div>
                <img src={data.image} alt={index + 1} height={44} width={44} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
