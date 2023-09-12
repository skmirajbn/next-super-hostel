"use client";

import Link from "next/link";
import Button from "../../components/button";
import MotionWrapScale from "../../components/motionWrap/motionWrapScale";

/* eslint-disable react/no-unescaped-entities */
function BookBranch() {
  return (
    <div className="py-10">
      <div className="container space-y-6">
        <div className="mx-auto w-44 h-10 bg-slate-300 rounded-xl animate-pulse"></div>
        <div className="w-60 h-6 bg-slate-300 rounded-xl animate-pulse"></div>
        <div>
          <div className="grid grid-cols-3 items-center gap-6">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="space-y-2">
                <div className="w-full h-64 bg-slate-300 rounded-xl animate-pulse"></div>
                <div className="w-full h-8 bg-slate-300 rounded-xl animate-pulse"></div>
                <div className="w-full h-6 bg-slate-300 rounded-xl animate-pulse"></div>
                <div className="w-full flex justify-center">
                  <div className="w-28 h-8 bg-slate-300 rounded-xl animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookBranch;
