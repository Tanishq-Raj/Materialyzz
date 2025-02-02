import * as React from "react";

export default function PropertyCard({ image, name, location, date, price }) {
  return (
    <div className="flex overflow-hidden flex-col items-start self-stretch px-3.5 pt-3.5 pb-10 my-auto bg-white rounded-3xl min-w-[240px] w-[454px] max-md:max-w-full">
      <img
        loading="lazy"
        src={image}
        alt={`Property view of ${name}`}
        className="object-contain self-stretch w-full rounded-3xl aspect-[1.42] max-md:max-w-full"
      />
      <div className="mt-7 ml-3 text-base leading-none text-gray-900 max-md:ml-2.5">
        {name}
      </div>
      <div className="flex gap-4 mt-4 ml-3 max-md:ml-2.5">
        <div className="flex flex-col my-auto leading-none text-gray-900">
          <div className="self-start">Location:</div>
          <div className="mt-4 max-md:mr-1">Auction Date:</div>
          <div className="mt-3">Starting Price:</div>
        </div>
        <div className="flex flex-col items-start leading-6 text-slate-600">
          <div className="self-stretch">{location}</div>
          <div className="mt-1">{date}</div>
          <div className="mt-1">${price}</div>
        </div>
      </div>
      <button 
        className="flex flex-col justify-center items-center px-5 py-3 mt-9 ml-3 leading-none text-white bg-sky-900 rounded-md max-md:ml-2.5"
        aria-label={`See details for ${name}`}
      >
        <div className="gap-2 self-stretch">See Details</div>
      </button>
    </div>
  );
}