export default function Home() {
  return (
    <main className="">
      <>
        <div id="body" className="bg-white">
          <div className="relative w-full h-[70vh] z-0 bg-slate-200 bg-cover bg-center">
            <div className="h-full flex flex-col justify-center items-center">
              <div className="h-8 w-44 bg-slate-500 animate-pulse rounded-full"></div>
              <div className="h-10 w-20 bg-slate-500 animate-pulse rounded-full mt-5"></div>
            </div>
            <div className="bg-black absolute left-0 right-0 bottom-0 top-0 opacity-20 -z-10"></div>
          </div>
        </div>
      </>
    </main>
  );
}
