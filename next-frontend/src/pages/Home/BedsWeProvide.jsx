import Button from "../../components/Button";
import Heading from "../../components/Heading";
import MotionWrapLeft from "../../components/motionWrap/MotionWrapLeft";
import MotionWrapRight from "../../components/motionWrap/MotionWrapRight";

export default function BedsWeProvide() {
  return (
    <div className="container">
      <div className="py-20 space-y-12">
        <Heading>Beds We Provide</Heading>
        <MotionWrapLeft>
          <section className="flex space-x-10">
            <div className="flex space-x-6 w-full items-center justify-between">
              <img className="h-44 w-full object-cover rounded-lg" src="/img/room-1.jpg" alt="" />
              <div className=" space-y-2">
                <h3 className="text-2xl">VIP</h3>
                <p className="text-gray-500 italic text-sm">
                  <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
                </p>
                <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
            </div>
            <div className="flex space-x-6 w-full items-center justify-between">
              <img className="h-44 w-full object-cover rounded-lg" src="/img/room-2.jpg" alt="" />
              <div className=" space-y-2">
                <h3 className="text-2xl">Business</h3>
                <p className="text-gray-500 italic text-sm">
                  <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
                </p>
                <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
            </div>
          </section>
        </MotionWrapLeft>
        <MotionWrapRight>
          <section className="flex space-x-10">
            <div className="flex space-x-6 w-full items-center justify-between">
              <div className=" space-y-2">
                <h3 className="text-2xl">Standard</h3>
                <p className="text-gray-500 italic text-sm">
                  <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
                </p>
                <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
              <img className="h-44 w-full object-cover rounded-lg" src="/img/room-3.jpg" alt="" />
            </div>
            <div className="flex space-x-6 w-full items-center justify-between">
              <div className=" space-y-2">
                <h3 className="text-2xl">Economy</h3>
                <p className="text-gray-500 italic text-sm">
                  <q>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, magni.</q>
                </p>
                <Button className="bg-blue-500 rounded-full px-4 leading-8 text-white">
                  Learn More <i className="fa-solid fa-chevron-right"></i>
                </Button>
              </div>
              <img className="h-44 w-full object-cover rounded-lg" src="/img/room-4.jpg" alt="" />
            </div>
          </section>
        </MotionWrapRight>
      </div>
    </div>
  );
}
