export default function Login() {
  return (
    <div className="bg-blue-300">
      <div className="container">
        <form>
          <section id="web-job-category" className="">
            <div className=" py-20 px-12 rounded-md  flex justify-center items-center text-gray-800">
              <div className=" w-96 bg-blue-100 rounded-lg py-10 px-10 space-y-6 shadow-xl">
                <h3 className="text-2xl text-center font-bold ">
                  <div className=" bg-slate-300 h-6 w-20 mx-auto rounded-full animate-pulse"></div>
                </h3>

                <div className="space-y-2">
                  <h4 className="text-md">
                    <div className="bg-slate-300  h-6 animate-pulse rounded-full"></div>
                  </h4>

                  <div className="bg-slate-300  h-6 animate-pulse rounded-full"></div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-md">
                    <div className="bg-slate-300  h-6 animate-pulse rounded-full"></div>
                  </h4>

                  <div className="bg-slate-300  h-6 animate-pulse rounded-full"></div>
                </div>

                <div className="">
                  <button type="submit" className="mx-auto block bg-slate-300 px-6 py-1 rounded-full text-white animate-pulse ">
                    <div className="bg-slate-300  h-6 animate-pulse rounded-full"></div>
                  </button>
                </div>

                <div className="flex justify-between items-center">
                  <h3 className="text-gray-600">
                    <div className="bg-slate-300 w-20  h-6 animate-pulse rounded-full"></div>
                  </h3>

                  <div className="bg-slate-300 text-white px-4 py-1 rounded-full">
                    <div className="bg-slate-300  h-6 w-12 animate-pulse rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}
