import Accommodation from "./Accommodation";
import BedsWeProvide from "./BedsWeProvide";
import ContactSectin from "./ContactSectin";
import MediaCoverage from "./MediaCoverage";
import OurBranches from "./OurBranches";
import Banner from "./banner";
import Services from "./services";

export default function Home() {
  return (
    <main className="">
      <>
        <div id="body" className="bg-white">
          <Banner />
          <Services />
          <Accommodation />
          <OurBranches />
          <BedsWeProvide />
          <MediaCoverage />
          <ContactSectin />
        </div>
      </>
    </main>
  );
}
