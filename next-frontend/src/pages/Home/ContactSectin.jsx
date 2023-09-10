import Heading from "../../components/Heading";
import MotionWrapScale from "./../../components/motionWrap/MotionWrapScale";

function ContactSectin() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <div className="py-20 space-y-10">
          <Heading>Contact Information</Heading>
          <div className="flex gap-10 ">
            <div className="w-1/2 space-y-6">
              <MotionWrapScale>
                <h3 className="text-center text-xl font-bold text-gray-700">Send Message</h3>
              </MotionWrapScale>
              <MotionWrapScale>
                <form className="flex flex-col space-y-4">
                  <input className="bg-white border-2 border-black rounded-md px-4 py-2" type="text" placeholder="Name" />
                  <input className="bg-white border-2 border-black rounded-md px-4 py-2" type="text" placeholder="Mobile Number" />
                  <input className="bg-white border-2 border-black rounded-md px-4 py-2" type="text" placeholder="Email ID" />
                  <textarea className="bg-white border-2 border-black rounded-md px-4 py-2" name="" id="" cols="30" rows="7" placeholder="Message"></textarea>
                  <div className="mx-auto">
                    <button className="bg-blue-600 text-white py-2 rounded-md px-6" type="submit">
                      Send <i className="fa-solid fa-paper-plane pl-2"></i>
                    </button>
                  </div>
                </form>
              </MotionWrapScale>
            </div>
            <div className="w-1/2 space-y-6">
              <MotionWrapScale>
                <h3 className="text-center text-xl font-bold text-gray-700">Contact Information</h3>
              </MotionWrapScale>
              <MotionWrapScale>
                <div className="bg-gray-700 text-white rounded-xl p-10 space-y-10 ">
                  <div className="space-y-6">
                    <h3 className="text-2xl text-center">Our Contact Information</h3>
                    <div className="space-y-3">
                      <h3 className="text-xl">
                        <i className="fa-solid fa-phone"></i> Phone: +880 1957244070
                      </h3>
                      <h3 className="text-xl">
                        <i className="fa-solid fa-envelope"></i> Email: sales@superhomebd.com
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-2xl text-center">Business Hours</h3>
                    <div className="space-y-3">
                      <h3 className="text-xl">
                        <i className="fa-solid fa-phone"></i> Mon. - Sun. 8am to 7pm
                      </h3>
                      <h3 className="text-xl">
                        <i className="fa-solid fa-envelope"></i> Open All day
                      </h3>
                    </div>
                  </div>
                </div>
              </MotionWrapScale>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSectin;
