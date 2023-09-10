import Accommodation from "@/components/pages/Home/Accommodation";
import Banner from "@/components/pages/Home/Banner";
import BedsWeProvide from "@/components/pages/Home/BedsWeProvide";
import ContactSectin from "@/components/pages/Home/ContactSectin";
import MediaCoverage from "@/components/pages/Home/MediaCoverage";
import OurBranches from "@/components/pages/Home/OurBranches";
import Services from "@/components/pages/Home/Services";

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
