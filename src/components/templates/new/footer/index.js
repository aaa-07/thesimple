import Image from "next/image";

export default function Footer() {
  return (
    <div className="container flex justify-center">
      <div className="footer-section md:flex hidden">
        <Image src="/images/header/logo.svg" height={37} width={134} alt="logo" />
        <div>All rights reserved thesimple 2024</div>
        <a href="https://www.linkedin.com/company/thesimple-inc/" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com/company/thesimple-inc/" target="_blank" rel="noreferrer">
          Linkedin
        </a>
      </div>

      <div className="footer-section md:hidden flex flex-col items-center ">
        <Image src="/images/header/logo.svg" height={37} width={134} alt="logo" className="mb-24" />
        <img src="/images/home/line.svg" alt="line" />
        <div className="leading-8 text-xs py-2">
          <a href="https://www.linkedin.com/company/thesimple-inc/" target="_blank" rel="noreferrer" className="mr-14">
            Instagram
          </a>
          <a href="https://www.linkedin.com/company/thesimple-inc/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
        </div>
        <img src="/images/home/line.svg" alt="line" />
        <div className="mt-4 leading-8 text-sm">All rights reserved thesimple 2024</div>
      </div>
    </div>
  );
}
