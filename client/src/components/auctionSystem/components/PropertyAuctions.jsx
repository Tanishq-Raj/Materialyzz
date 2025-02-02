import * as React from "react";
import PropertyCard from "./PropertyCard";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import NewsletterForm from "./NewsletterForm";

export default function PropertyAuctions() {
  const properties = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4446c63f83f17ac0c7b5caed30723e47167bad11295d617f54588d280e0e0fb8?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Azure Palace",
      location: "123 Main Street, Cityname",
      date: "January 20, 2025",
      price: "250,000"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/4446c63f83f17ac0c7b5caed30723e47167bad11295d617f54588d280e0e0fb8?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Azure Palace",
      location: "123 Main Street, Cityname",
      date: "January 20, 2025",
      price: "250,000"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/81446ccfac9a41b1a0cc65f08d0ebb35642913ca6d1736108d6f1cb275cfc770?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031",
      name: "Azure Palace",
      location: "123 Main Street, Cityname",
      date: "January 20, 2025",
      price: "250,000"
    }
  ];

  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col py-12 w-full bg-slate-50 max-md:max-w-full">
        <div className="self-center text-5xl font-medium leading-none text-sky-900 max-md:max-w-full max-md:text-4xl">
          Explore our latest property Auctions :
        </div>
        <div className="flex flex-col pl-7 mt-7 w-full max-md:pl-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between w-full text-sky-900 max-w-[1346px] max-md:max-w-full">
            <div className="text-3xl leading-none font-[250]">Latest Result</div>
            <div className="gap-0 self-start text-lg text-right">See all result</div>
          </div>
          <div className="flex gap-10 items-center mt-11 text-xs font-semibold max-md:mt-10 max-md:max-w-full">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
        <button className="flex gap-2 justify-center items-center self-end px-6 py-4 mt-12 mr-28 rounded-2xl bg-sky-900 bg-opacity-10 max-md:px-5 max-md:mt-10 max-md:mr-2.5">
          <div className="self-stretch my-auto text-lg leading-none text-center rounded-lg text-zinc-900 w-[68px]">
            View All
          </div>
          <div className="flex gap-1 justify-center items-center self-stretch px-1 my-auto w-8 h-8 rounded-lg bg-zinc-900 bg-opacity-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6704744fb3259d66d38d3ecc5a305d56a73c2e8a355ce17304faa8ca159a55?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
              alt="View all arrow"
              className="object-contain self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </button>
      </div>

      <div className="overflow-hidden self-center pl-20 mt-32 max-w-full bg-white border-zinc-500 w-[1298px] max-md:pl-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="flex flex-col max-w-full text-black w-[545px]">
                  <div className="text-6xl max-md:text-4xl">
                    <span className="font-bold">Get in </span>
                    <span className="font-bold text-sky-900">Touch</span>
                  </div>
                  <div className="mt-5 text-sm font-semibold tracking-normal leading-6 max-md:max-w-full">
                    Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
                  </div>
                </div>
                <ContactForm />
              </div>
              <ContactInfo />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="grow max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
                  <div className="z-10 mt-20 mr-0 text-3xl font-medium text-black max-md:mt-10">
                    <span className="font-bold text-sky-900">Locate</span>{" "}
                    <span className="font-bold text-neutral-200">us</span>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center items-start py-28 w-full bg-sky-900 max-md:py-24">
                    <div className="flex flex-col justify-center items-end px-20 py-64 max-md:px-5 max-md:py-24 max-md:max-w-full">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a233ff87cd9f6d6ea821844811652a0972f2f1d3c1b2fddf13b51e6dc1a9bb?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
                        alt="Location marker"
                        className="object-contain mb-0 aspect-square w-[50px] max-md:mb-2.5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex flex-col px-16 pt-32 pb-7 mt-20 w-full bg-zinc-800 max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
        <div className="w-full max-w-[1020px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="self-start text-4xl font-bold leading-9">S8 Auctions</div>
                <address className="mt-5 text-base leading-7 not-italic">
                  Wisma Geha, Jl. Timor No.25, RT.9/RW.4, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350
                  <br />
                  p. 0813-1066-8211
                  <br />
                  e. info@annexe-auction.online
                </address>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <NewsletterForm />
              <nav className="flex gap-5 justify-between mt-7 max-w-full text-lg font-semibold text-white w-[415px]">
                <div className="flex flex-col">
                  <a href="#" className="gap-0 self-stretch">Consign with us</a>
                  <a href="#" className="gap-0 self-start mt-1.5">Register to bid</a>
                </div>
                <div className="flex flex-col">
                  <a href="#" className="gap-0 self-stretch">Terms & Conditions</a>
                  <a href="#" className="gap-0 self-start mt-1.5">Privacy Policy</a>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 mt-32 w-full max-md:mt-10 max-md:max-w-full">
          <div className="shrink my-auto text-base leading-relaxed text-white basis-auto grow-0">
            © 2022 s8 Auction Online. All rights reserved
          </div>
          <div className="flex flex-wrap flex-auto gap-5">
            <div className="shrink-0 my-auto max-w-full h-0 border-white w-[771px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4c85b9aacb0d868fc59507a007e7736ed933dc7e85248ce20d5f6a2f87cf3a4?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[30px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e788504ef9cf5eb741e94d1251a38ce905d06a6d82bbc5f5465dfb1f199d2bab?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[30px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3836e1b4de30f50166de84d944499348988a1b4a56616da2e93bd2e9048e1674?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[30px]" />
          </div>
        </div>
      </footer>
    </div>
  );
}