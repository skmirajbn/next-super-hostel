/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/button";
import Heading from "@/components/heading";
import MotionWrapScale from "@/components/motionWrap/motionWrapScale";
import environment from "@/environment/environment";
import getDataApi from "@/hooks/getDataApi";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function OurBranches({}) {
  const { data, isLoading } = useQuery({
    queryKey: ["branches"],
    queryFn: () => getDataApi(environment.apiUrl + "branches/getAllBranches.php", {}),
  });
  useEffect(() => {
    console.log(data);
  });
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="py-20 space-y-10">
          <Heading>Our Branches</Heading>
          <div className="grid grid-cols-3 items-center gap-6">
            {/* Single Branch */}
            {data &&
              data.map((branch) => (
                <MotionWrapScale key={branch.branch_id}>
                  <div className="space-y-2">
                    <img className="w-full h-64 object-cover rounded-xl" src={environment.imageUrl + branch.branch_image} alt="" />
                    <h3 className="text-2xl text-center font-semibold">{branch.branch_name}</h3>
                    <h4 className="text-center text-gray-500">
                      <i className="fa-solid fa-location-dot"></i>
                      {branch.branch_address}
                    </h4>
                    <div className="w-full flex justify-center">
                      <Button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                        Take a Tour <i className="fa-solid fa-chevron-right"></i>
                      </Button>
                    </div>
                  </div>
                </MotionWrapScale>
              ))}
            {/* Single Branch */}
            <MotionWrapScale>
              <div className="space-y-2">
                <img className="w-full h-64 rounded-xl" src="/img/hostel-2.jpg" alt="" />
                <h3 className="text-2xl text-center font-semibold">Motijheel Branch</h3>
                <h4 className="text-center text-gray-500">
                  <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
                </h4>
                <div className="w-full flex justify-center">
                  <Button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                    Take a Tour <i className="fa-solid fa-chevron-right"></i>
                  </Button>
                </div>
              </div>
            </MotionWrapScale>
            {/* Single Branch */}
            <MotionWrapScale>
              <div className="space-y-2">
                <img className="w-full h-64 rounded-xl" src="/img/hostel-3.jpg" alt="" />
                <h3 className="text-2xl text-center font-semibold">Mohammadpur Branch</h3>
                <h4 className="text-center text-gray-500">
                  <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
                </h4>
                <div className="w-full flex justify-center">
                  <Button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                    Take a Tour <i className="fa-solid fa-chevron-right"></i>
                  </Button>
                </div>
              </div>
            </MotionWrapScale>
            {/* Single Branch */}
            <MotionWrapScale>
              <div className="space-y-2">
                <img className="w-full h-64 rounded-xl" src="/img/hostel-4.jpg" alt="" />
                <h3 className="text-2xl text-center font-semibold">Mirpur Branch</h3>
                <h4 className="text-center text-gray-500">
                  <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
                </h4>
                <div className="w-full flex justify-center">
                  <Button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                    Take a Tour <i className="fa-solid fa-chevron-right"></i>
                  </Button>
                </div>
              </div>
            </MotionWrapScale>
            {/* Single Branch */}
            <MotionWrapScale>
              <div className="space-y-2">
                <img className="w-full h-64 rounded-xl" src="/img/hostel-5.jpg" alt="" />
                <h3 className="text-2xl text-center font-semibold">Banani Branch</h3>
                <h4 className="text-center text-gray-500">
                  <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
                </h4>
                <div className="w-full flex justify-center">
                  <Button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                    Take a Tour <i className="fa-solid fa-chevron-right"></i>
                  </Button>
                </div>
              </div>
            </MotionWrapScale>
            {/* Single Branch */}
            <MotionWrapScale>
              <div className="space-y-2">
                <img className="w-full h-64 rounded-xl" src="/img/hostel-6.jpg" alt="" />
                <h3 className="text-2xl text-center font-semibold">Uttara Branch</h3>
                <h4 className="text-center text-gray-500">
                  <i className="fa-solid fa-location-dot"></i> Momotaz Plaza, Dhanmondi, Dhaka
                </h4>
                <div className="w-full flex justify-center">
                  <Button className="bg-blue-500 px-6 leading-8 text-white rounded-full">
                    Take a Tour <i className="fa-solid fa-chevron-right"></i>
                  </Button>
                </div>
              </div>
            </MotionWrapScale>
          </div>
        </div>
      </div>
    </div>
  );
}
