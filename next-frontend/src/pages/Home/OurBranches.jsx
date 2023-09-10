import Heading from "../../components/Heading";
import Button from "./../../components/Button";
import MotionWrapScale from "./../../components/motionWrap/MotionWrapScale";

export default function OurBranches() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="py-20 space-y-10">
          <Heading>Our Branches</Heading>
          <div className="grid grid-cols-3 items-center gap-6">
            {/* Single Branch */}
            <MotionWrapScale>
              <div className="space-y-2">
                <img className="w-full h-64 rounded-xl" src="/img/hostel-1.png" alt="" />
                <h3 className="text-2xl text-center font-semibold">Dhanmondi Branch</h3>
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
