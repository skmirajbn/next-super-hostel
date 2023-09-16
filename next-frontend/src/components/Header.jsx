"use client";
import Link from "next/link";

import { usePathname } from "next/navigation";
import FadeIn from "./motionWrap/fadeIn";
import MotionWrapScale from "./motionWrap/motionWrapScale";

function Header() {
  const path = usePathname();
  console.log("pathname is: " + path);
  const transition = {
    transitionTimingFunction: "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);",
    transitionDuration: "200ms",
  };
  const active = "text-cyan-600 font-bold inline-block bg-white px-4 leading-8 rounded-full";
  return (
    <div className="bg-[#279EFF] text-white py-4">
      <FadeIn>
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Link href="">
              <i className="fa-solid fa-hotel text-3xl mr-3"></i>
            </Link>
            <Link href="">Super Hostel BD</Link>
          </div>
          <div className="space-x-4">
            <Link href="/" className={path === "/" ? active : ""} style={transition}>
              Home
            </Link>
            <Link href="/about" className={path === "/about" ? active : ""} style={transition}>
              About Us
            </Link>
            <Link href="/social" className={path === "/social" ? active : ""} style={transition}>
              Social
            </Link>
            <Link href="/blog" className={path === "/blog" ? active : ""} style={transition}>
              Blog
            </Link>
            <Link href="/contact" className={path === "/contact" ? active : ""} style={transition}>
              Contact
            </Link>
            <Link href="/team" className={path === "/team" ? active : ""} style={transition}>
              Our Team
            </Link>
            <Link href="/login" className={path === "/login" ? active : ""} style={transition}>
              Login
            </Link>
            <div className="inline-block">
              <MotionWrapScale>
                <Link className="bg-orange-500 py-[6px] px-6 rounded-full" href="/branch">
                  Book a Seat
                </Link>
              </MotionWrapScale>
            </div>
          </div>
          <div className="space-x-4 flex justify-center items-center">
            {/* Search */}
            <div className="relative">
              <input className="px-3 py-1 w-52 text-black rounded-md bg-white" type="text" placeholder="Search..." />
              <i className="fa-solid fa-magnifying-glass absolute right-3 text-black top-1/2 -translate-y-1/2"></i>
            </div>
            <Link href="#">
              <i className="fa-brands fa-google"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Header;
