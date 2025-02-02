import * as React from "react";

export default function NewsletterForm() {
  return (
    <form className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-7 w-full max-md:max-w-full">
        <div className="flex flex-col grow shrink-0 items-start basis-0 w-fit max-md:max-w-full">
          <label htmlFor="newsletter-email" className="text-xl font-bold leading-none text-white">
            subscribe to our newsletter
          </label>
          <input
            type="email"
            id="newsletter-email"
            className="mt-4 w-full bg-transparent text-base leading-relaxed text-white text-opacity-40 border-b border-white"
            placeholder="enter your email address"
            aria-label="Email address for newsletter"
          />
        </div>
        <button
          type="submit"
          className="gap-2.5 self-end px-5 py-2.5 mt-8 text-base font-bold text-white whitespace-nowrap border border-white border-solid"
        >
          Send
        </button>
      </div>
    </form>
  );
}