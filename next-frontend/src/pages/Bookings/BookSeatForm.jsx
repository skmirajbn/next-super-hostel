import { useParams } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
function BookSeatForm() {
  let { id } = useParams();

  return (
    <div className="container py-12 space-y-8">
      <h3 className="font-bold text-2xl">Book a Seat</h3>
      <div className="flex justify-center">
        <img className="w-1/2  object-cover" src="/img/booking.svg" alt="" />
      </div>
      <h3 className="text-2xl font-bold text-center">Already Have an Account?</h3>
      <div className="space-y-3">
        <h3 className="text-xl bg-orange-600 text-white px-6 py-2 w-fit rounded-full mx-auto">Login</h3>
        <h3 className="text-xl bg-blue-700 text-white px-6 py-2 w-fit rounded-full mx-auto">
          <i className="fa-brands fa-square-facebook"></i> Login with <span className=" font-bold">Facebook</span>
        </h3>
        <h3 className="text-xl bg-orange-800 text-white px-6 py-2 w-fit rounded-full mx-auto">
          <i className="fa-brands fa-google"></i> Login with <span className=" font-bold">Google</span>
        </h3>
        <h4 className="text-2xl text-center font-bold">Or</h4>
      </div>
      <form>
        {/* <h3 className="text-4xl">The params is : {id}</h3> */}
        {/* User info For signup */}
        <div className="flex gap-10">
          <div className="w-1/2 space-y-4 text-lg">
            <h3 className="text-2xl font-bold">Create Account</h3>
            <div className="space-y-2">
              <label className=" font-medium">Name :</label>
              <br />
              <input className="border border-slate-300 rounded-md p-2 w-full" type="text" placeholder="Enter Your Name" />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Email</label>
              <br />
              <input className="border border-slate-300 rounded-md p-2 w-full" type="text" placeholder="Enter Your Email" />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Phone</label>
              <br />
              <input className="border border-slate-300 rounded-md p-2 w-full" type="text" placeholder="Enter Your Phone" />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">National ID</label>
              <br />
              <input className="border border-slate-300 rounded-md p-2 w-full" type="number" placeholder="Enter Your National ID" />
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Person/Person's</label>
              <br />
              <input className="border border-slate-300 rounded-md p-2 w-full" type="text" placeholder="Enter How many Persons will stay" />
            </div>
          </div>
          {/* Booking */}
          <div className="w-1/2 text-lg space-y-4">
            <h3 className="text-2xl font-bold">Book Seat</h3>
            <div className="space-y-2">
              <label className=" font-medium">Pakage</label>
              <br />
              <div className="grid grid-cols-2 w-72 bg-slate-200 p-6 rounded-md gap-6">
                <h4 className="bg-white w-fit py-2 px-4 rounded-md ">3 days</h4>
                <h4 className="bg-white w-fit py-2 px-4 rounded-md ">7 days</h4>
                <h4 className="bg-white w-fit py-2 px-4 rounded-md ">30 days</h4>
              </div>
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Branch</label>
              <div className="w-60 relative z-0 rounded-md overflow-hidden">
                <h3 className="absolute text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 font-medium text-2xl">Dhanmondi</h3>
                <div className="bg-black absolute left-0 right-0 top-0 bottom-0 opacity-40"></div>
                <img className="" src="/img/hostel-1.png" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-medium">Room</label>
              <br />
              <select className="w-full border-2 border-slate-300 rounded-md p-2" name="" id="">
                <option value="">Select availabe Room</option>
                <option value="">3A</option>
                <option value="">4A</option>
                <option value="">5A</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className=" font-medium">Bed</label>
              <div className="bg-slate-100 grid grid-cols-2 gap-4 p-6 w-80 rounded-md">
                <div className="bg-white w-fit py-2 px-4 rounded-md justify-self-center">Seat-1</div>
                <div className="bg-gray-300 w-fit py-2 px-4 rounded-md justify-self-center">Seat-2</div>
                <div className="bg-gray-300 w-fit py-2 px-4 rounded-md justify-self-center">Seat-3</div>
                <div className="bg-gray-300 w-fit py-2 px-4 rounded-md justify-self-center">Seat-4</div>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto block bg-blue-600 text-white px-6 py-2 rounded-full mt-10">
          Book Now <i className="fas fa-arrow-right pl-2"></i>
        </button>
      </form>
    </div>
  );
}

export default BookSeatForm;
