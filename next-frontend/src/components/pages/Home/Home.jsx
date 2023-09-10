import Accommodation from "./Accommodation";
import Banner from "./Banner";
import BedsWeProvide from "./BedsWeProvide";
import ContactSectin from "./ContactSectin";
import MediaCoverage from "./MediaCoverage";
import OurBranches from "./OurBranches";
import Services from "./Services";

export default function Home() {
  return (
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
  );
}
