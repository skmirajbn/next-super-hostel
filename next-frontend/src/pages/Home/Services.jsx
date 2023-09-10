import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MotionWrapDown from "../../components/motionWrap/MotionWrapDown";
import MotionWrapUp from "../../components/motionWrap/MotionWrapUp";
import airConditioning from "./../../assets/animations/air-conditioning.json";
import entertainment from "./../../assets/animations/entertainment.json";
import gym from "./../../assets/animations/gym.json";
import reading from "./../../assets/animations/reading.json";
import security from "./../../assets/animations/security.json";
import swimming from "./../../assets/animations/swimming.json";
import washingMachine from "./../../assets/animations/washing-machine.json";
import wifi from "./../../assets/animations/wifi.json";

export default function Services() {
  return (
    <div className="bg-gray-200 py-20">
      <div className="container space-y-10">
        <Heading>Services</Heading>
        <div className="grid grid-cols-4 gap-6">
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <Lottie className="w-32 mx-auto" animationData={airConditioning} />
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>Air Conditioning</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <Lottie className="w-32 h-32 mx-auto" animationData={washingMachine} />
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>Washing Machine</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <Lottie className="w-32 h-32 mx-auto" animationData={reading} />
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>Reading Space</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <Lottie className="w-32 h-32 mx-auto" animationData={gym} />
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>Excercise</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <Lottie className="w-32 h-32 mx-auto" animationData={wifi} />
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>Wifi Network</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <Lottie className="w-32 h-32 mx-auto" animationData={entertainment} />
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>Entertainment</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <Lottie className="w-32 h-32 mx-auto" animationData={security} />
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>High Security</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
          {/* Single Service */}
          <div className="flex flex-col bg-[#279EFF] px-6 pb-12 pt-4 text-white space-y-3 rounded-lg">
            <div>
              <MotionWrapDown>
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <Lottie animationData={swimming} />
                </div>
              </MotionWrapDown>
            </div>
            <h2 className="text-center text-xl">
              <MotionWrapUp>Swimming Pool</MotionWrapUp>
            </h2>
            <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quam?</p>
            <Link className="text-center">
              <Button className="text-md bg-orange-500 text-white px-6 py-2 rounded-full mt-4">
                Learn More <i className="fa-solid fa-angle-right"></i>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
