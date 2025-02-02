import React, { useState } from 'react';

const socialIcons = [
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4c85b9aacb0d868fc59507a007e7736ed933dc7e85248ce20d5f6a2f87cf3a4?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108", alt: "Social media icon 1", href: "#" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e788504ef9cf5eb741e94d1251a38ce905d06a6d82bbc5f5465dfb1f199d2bab?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108", alt: "Social media icon 2", href: "#" },
  { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3836e1b4de30f50166de84d944499348988a1b4a56616da2e93bd2e9048e1674?placeholderIfAbsent=true&apiKey=2b64ceff962d4ae184f534c4b0acd108", alt: "Social media icon 3", href: "#" }
];

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setEmail('');
    }
  };

  return (
    <footer className="flex flex-col px-16 pt-32 pb-7 w-full bg-zinc-800 max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <div className="w-full max-w-[1020px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-10">
              <div className="self-start text-4xl font-bold leading-9">
                S8 Auctions
              </div>
              <address className="mt-5 text-base leading-7 not-italic">
                Wisma Geha, Jl. Timor No.25, RT.9/RW.4, Gondangdia, Kec.
                Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta
                10350
                <br />
                <a 
                  href="tel:+6281310668211" 
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                >
                  p. 0813-1066-8211
                </a>
                <br />
                <a 
                  href="mailto:info@annexe-auction.online"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                >
                  e. info@annexe-auction.online
                </a>
              </address>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
              <form 
                onSubmit={handleSubmit}
                className="flex flex-wrap gap-7 w-full max-md:max-w-full"
              >
                <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                  <label 
                    htmlFor="newsletter" 
                    className="text-xl font-bold leading-none text-white"
                  >
                    subscribe to our newsletter
                  </label>
                  <input
                    type="email"
                    id="newsletter"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="enter your email address"
                    className="mt-4 bg-transparent text-base leading-relaxed text-white text-opacity-40 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                    aria-label="Email address for newsletter"
                  />
                  <div className="shrink-0 self-stretch mt-3.5 h-px border border-white border-solid max-md:max-w-full" />
                </div>
                <button 
                  type="submit"
                  className="gap-2.5 self-end px-5 py-2.5 mt-8 text-base font-bold text-white whitespace-nowrap border border-white border-solid hover:bg-white hover:text-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                >
                  Send
                </button>
              </form>
              <nav 
                className="flex gap-5 justify-between mt-7 max-w-full text-lg font-semibold text-white w-[415px]"
                aria-label="Footer navigation"
              >
                <div className="flex flex-col">
                  <a 
                    href="#" 
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                  >
                    Consign with us
                  </a>
                  <a 
                    href="#" 
                    className="mt-1.5 hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                  >
                    Register to bid
                  </a>
                </div>
                <div className="flex flex-col">
                  <a 
                    href="#" 
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                  >
                    Terms & Conditions
                  </a>
                  <a 
                    href="#" 
                    className="mt-1.5 hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                  >
                    Privacy Policy
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 mt-32 w-full max-md:mt-10 max-md:max-w-full">
        <div className="shrink my-auto text-base leading-relaxed text-white basis-auto grow-0">
          © 2022 s8 Auction Online. All rights reserved
        </div>
        <div className="flex flex-wrap flex-auto gap-5">
          <div className="shrink-0 my-auto max-w-full h-0 border-white w-[771px]" />
          {socialIcons.map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
            >
              <img
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className="object-contain shrink-0 aspect-square w-[30px]"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;