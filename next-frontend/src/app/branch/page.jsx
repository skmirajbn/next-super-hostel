"use client";

import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
function BookBranch() {
  return (
    <div className="py-10">
      <div className="container space-y-6">
        <h3 className="text-center text-2xl font-bold">Book Seat</h3>
        <h3 className="text-xl font-medium">
          <i className="fa-solid fa-house-circle-check"></i> Select Branch
        </h3>
        <div>
          <div className="grid grid-cols-3 items-center gap-6">
            {/* Single Branch */}

            <div className="space-y-2">
              <span className="w-full h-64 rounded-xl bg-slate-200" />
              <h3 className="text-2xl text-center font-semibold">Dhanmondi Branch</h3>
              <h4 className="text-center text-gray-500">
                <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
              </h4>
              <div className="w-full flex justify-center">
                <Link href="/branch/1">
                  <button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                    Select Branch <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </Link>
              </div>
            </div>

            {/* Single Branch */}

            <div className="space-y-2">
              <img className="w-full h-64 rounded-xl" src="/img/hostel-2.jpg" alt="" />
              <h3 className="text-2xl text-center font-semibold">Motijheel Branch</h3>
              <h4 className="text-center text-gray-500">
                <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
              </h4>
              <div className="w-full flex justify-center">
                <button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                  Select Branch <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Single Branch */}

            <div className="space-y-2">
              <img className="w-full h-64 rounded-xl" src="/img/hostel-3.jpg" alt="" />
              <h3 className="text-2xl text-center font-semibold">Mohammadpur Branch</h3>
              <h4 className="text-center text-gray-500">
                <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
              </h4>
              <div className="w-full flex justify-center">
                <button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                  Select Branch <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Single Branch */}

            <div className="space-y-2">
              <img className="w-full h-64 rounded-xl" src="/img/hostel-4.jpg" alt="" />
              <h3 className="text-2xl text-center font-semibold">Mirpur Branch</h3>
              <h4 className="text-center text-gray-500">
                <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
              </h4>
              <div className="w-full flex justify-center">
                <button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                  Select Branch <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Single Branch */}

            <div className="space-y-2">
              <img className="w-full h-64 rounded-xl" src="/img/hostel-5.jpg" alt="" />
              <h3 className="text-2xl text-center font-semibold">Banani Branch</h3>
              <h4 className="text-center text-gray-500">
                <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
              </h4>
              <div className="w-full flex justify-center">
                <button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                  Select Branch <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            {/* Single Branch */}

            <div className="space-y-2">
              <img className="w-full h-64 rounded-xl" src="/img/hostel-6.jpg" alt="" />
              <h3 className="text-2xl text-center font-semibold">Uttara Branch</h3>
              <h4 className="text-center text-gray-500">
                <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
              </h4>
              <div className="w-full flex justify-center">
                <button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                  Select Branch <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookBranch;
