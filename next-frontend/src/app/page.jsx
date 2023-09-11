import Accommodation from "@/components/pages/Home/accommodation";
import Banner from "@/components/pages/Home/banner";
import BedsWeProvide from "@/components/pages/Home/bedsWeProvide";
import ContactSectin from "@/components/pages/Home/contactSectin";
import MediaCoverage from "@/components/pages/Home/mediaCoverage";
import OurBranches from "@/components/pages/Home/ourBranches";
import Services from "@/components/pages/Home/services";

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
