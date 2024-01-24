/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemTypes {
  path: string;
  title: string;
}

const Navbar = () => {
  const pathname = usePathname();

  // nav item lists
  const navItems = [{ path: '/', title: 'Home', }, { path: '/about', title: 'About', }, { path: '/facilities', title: 'Facilities', }, { path: '/admission', title: 'Admission & Academic', }, { path: '/contact', title: 'Contact', }, { path: '/news', title: 'News', }]

  return (
    <div className="">
      <div className="navbar  max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {/* <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
            </ul>
          </div>
          <img
            className="w-36 "
            src="https://i.ibb.co/NYS3rn9/486.jpg"
            alt=""
          />
        </div>

        {/* nav items */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold ">
            {
              navItems.map((item: NavItemTypes, index: number) => (
                <li key={index}>
                  <Link className={`${pathname === item.path ? "bg-gray-300 rounded-md px-7" : ""}`} href={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="navbar-end">
          <Link href="/donate">
            {" "}
            <button className="btn shadow-[0_9px_0_rgb(0,0,0)] hover:shadow-[0_4px_0px_rgb(0,0,0)] text-black bg-white ease-out hover:translate-y-1 transition-all rounded">
              {" "}
              Donate Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
