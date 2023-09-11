"use client";

import Heading from "@/components/heading";
import MotionWrapDown from "@/components/motionWrap/motionWrapDown";
import MotionWrapScale from "@/components/motionWrap/motionWrapScale";
import Image from "next/image";

export default function Accommodation() {
  return (
    <div className="container">
      <div className="py-20 space-y-10">
        <Heading>Accommodation</Heading>
        <div className="grid grid-cols-2 items-center gap-6">
          <MotionWrapDown>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold uppercase">Our Beautiful Accommodation</h2>
              <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio iste, beatae corrupti vitae soluta eaque suscipit modi veritatis magnam delectus tempora magni ut, sapiente voluptate fuga repellat ipsum maxime cupiditate voluptatibus voluptatem? Perspiciatis expedita rerum ab, deserunt fugit autem, nisi voluptatem itaque sapiente, minus eligendi tempore quo incidunt sed aliquam?</p>
            </div>
          </MotionWrapDown>
          <MotionWrapScale>
            <Image className="rounded-lg" width={1000} height={1000} quality={60} src="/img/Accommodation.jpg" alt="" />
          </MotionWrapScale>
        </div>
      </div>
    </div>
  );
}
