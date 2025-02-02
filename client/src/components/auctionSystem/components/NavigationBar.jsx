import * as React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";

export default function NavigationBar() {
  const { section } = useParams();
  const location = useLocation(); // Hook to track the current route
  const [activeIndex, setActiveIndex] = React.useState(null);

  const navItems = [
    { label: "Home", isBold: true, to: "/" },
    { label: "Auctions", isBold: false, to: "/auctions" },
    { label: "Properties", isBold: false, to: "/properties" },
    { label: "About Us", isBold: false, to: "/about" },
    { label: "Contact Us", isBold: false, to: "/contact" },
  ];

  // Update activeIndex based on current route
  React.useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.findIndex(item => item.to === currentPath);
    setActiveIndex(activeItem);
  }, [location.pathname]);

  return (
    <div className="flex flex-wrap gap-5 justify-between px-9 py-3.5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex text-3xl font-extrabold leading-none text-sky-900 whitespace-nowrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a227a67fb1aa60ea4fcfdf701adff7cfa910ebdd82c2188f253364885db64408?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
          alt="Company Logo"
          className="object-contain shrink-0 w-16 aspect-[0.79]"
        />
        <div className="self-start mt-11 max-md:mt-10">s8</div>
      </div>
      <div className="flex my-auto text-base text-right text-black max-md:max-w-full">
        <div className="flex flex-wrap flex-auto gap-10 justify-between items-center py-2.5 w-full max-md:max-w-full">
          {navItems.map((item, index) => (
            <NavLink
              to={item.to}
              key={index}
              className={`self-stretch my-auto ${activeIndex === index ? 'border-b-2 border-sky-900' : ''}`}
              onClick={() => setActiveIndex(index)} // Set the active item when clicked
            >
              {item.label}
            </NavLink>
          ))}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e0a294f996ea60c74ea8b67cc5b04be9dc56446b976248136facd6ce324cb442?placeholderIfAbsent=true&apiKey=94eb20460e0f412389c7e1a6f1ae6031"
            alt="User Profile Icon"
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <NavLink to='/sign-up' className="gap-2.5 self-stretch px-6 py-2.5 my-auto font-semibold text-white bg-sky-900 rounded-[55px] max-md:px-5">
            Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}
