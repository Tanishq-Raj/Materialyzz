import * as React from "react";

export default function ProcessStep({ iconSrc, title, extraClasses = "" }) {
  return (
    <div className={`flex flex-col ${extraClasses}`}>
      <div className="flex flex-col justify-center items-center px-5 bg-sky-900 rounded-full h-[191px] w-[191px] max-md:px-5">
        <img
          loading="lazy"
          src={iconSrc}
          alt={title}
          className="object-contain aspect-square w-[84px]"
        />
      </div>
      <div className="mt-5 text-lg leading-6 text-center text-sky-900">
        {title}
      </div>
    </div>
  );
}
