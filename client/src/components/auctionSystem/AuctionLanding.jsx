import * as React from "react";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/SearchBar";
import ProcessSteps from "./components/ProcessSteps";
import PropertyCard from "./components/PropertyCard";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import PropertyAuctions from "./components/PropertyAuctions";

export default function AuctionLanding() {
  return (
    <div className="flex overflow-hidden flex-col bg-white ">
      
      <div className="pr-20 pl-2 w-full bg-[#004663] max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col items-start px-8 pt-12 w-full text-base text-right min-h-[643px] pb-[546px] text-white text-opacity-40 max-md:px-5 max-md:pb-24 max-md:max-w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fee83c532ee2cbc0dbe8438799b6e163611a329dff92d59d5826885bac100c5?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
                alt="Hero Background"
                className="object-cover absolute inset-0 size-full"
              />
              <SearchBar />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="text-9xl font-extrabold text-yellow-900 leading-[112px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                <span className="text-yellow-900">V</span>
                <span className="text-white">alue,</span>{" "}
                <span className="text-yellow-600">B</span>
                <span className="text-white">uy, Sell</span>
              </div>
              <div className="self-end mt-14 mr-7 text-xl leading-7 text-white max-md:mt-10 max-md:mr-2.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar interdum enim a vestibulum, nunc cras. Gravida morbi
                sit sed egestas cursus risus imperdiet bibendum nisl enim.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-end mt-12 mr-24 max-w-full w-[682px] max-md:mt-10 max-md:mr-2.5">
        <div className="flex gap-4 items-center my-auto">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className={`flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full ${
                index === 0 ? "bg-sky-900" : "bg-zinc-300"
              }`}
            />
          ))}
        </div>
        <button className="flex gap-2 justify-center items-center px-6 py-4 rounded-2xl bg-sky-900 bg-opacity-10 max-md:px-5">
          <div className="self-stretch my-auto text-lg leading-none text-center rounded-lg text-zinc-900 w-[121px]">
            View Auctions
          </div>
          <div className="flex gap-1 justify-center items-center self-stretch px-1 my-auto w-8 h-8 rounded-lg bg-zinc-900 bg-opacity-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d6704744fb3259d66d38d3ecc5a305d56a73c2e8a355ce17304faa8ca159a55?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
              alt="View Arrow"
              className="object-contain self-stretch my-auto w-6 aspect-square"
            />
          </div>
        </button>
      </div>
      <div className="flex flex-col pr-7 pl-16 mt-12 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="shrink-0 self-end max-w-full h-px border border-black border-solid w-[1312px]" />
        <div className="flex gap-10 mt-16 max-w-full leading-none w-[401px] max-md:mt-10">
          <div className="flex flex-col flex-1 text-3xl font-bold text-sky-900">
            <div className="max-md:mr-0.5">Bid on item</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20df2056ac46a94304eb9da9527cf4188836035ac2d1bf3db214c1d3c3a55906?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
              alt="Bid Decoration"
              className="object-contain mt-6 aspect-[58.82] w-[173px]"
            />
          </div>
          <div className="grow shrink self-start text-xl text-black w-[129px]">
            Become a Seller{" "}
          </div>
        </div>
        <div className="self-center mt-28 ml-7 text-2xl font-semibold leading-9 text-center text-sky-900 w-[1022px] max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
          interdum enim a vestibulum, nunc cras. Gravida morbi sit sed egestas
          cursus risus imperdiet bibendum nisl enim.
        </div>
        <ProcessSteps />
      </div>
      <div className="flex relative flex-col justify-center items-center px-16 py-24 mt-14 w-full min-h-[334px] max-md:px-5 max-md:pt-24 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/424d8d6b4e807e290df9eebae9bcb92a30cda7be832bb9346b486b290eb12e8b?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
          alt="Footer Background"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative max-w-full w-[873px]">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="relative text-2xl font-bold leading-9 text-right text-white max-md:mt-9 max-md:max-w-full">
                Empowering banks to showcase auctions effortlessly and
                connecting users to valuable opportunities seamlessly.
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <button className="relative gap-5 px-9 py-5 mt-1.5 text-3xl font-bold text-white border-2 border-white border-solid max-md:px-5 max-md:mt-10">
                Register to get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <PropertyAuctions/>
      {/* <PropertyCard/>
      <ContactForm/>
      <ContactInfo/> */}
    </div>
  );
}
