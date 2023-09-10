import Heading from "../../components/Heading";
import MotionWrapScale from "./../../components/motionWrap/MotionWrapScale";

function MediaCoverage() {
  return (
    <div className="container">
      <div className="py-20 space-y-10">
        <Heading>On Top Media Coverage</Heading>
        <div className="grid grid-cols-6 gap-16">
          <div className=" block">
            <MotionWrapScale>
              <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full " src="/img/media-coverage/prothom-alo.webp" alt="" />
              <h3 className="text-center font-medium text-black text-lg">Prothom Alo</h3>
            </MotionWrapScale>
          </div>
          <div className=" block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/ekushey-tv.webp" alt="" />
                <h3 className="text-center font-medium text-black text-lg">Ekushey Tv</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className=" block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/somoy-tv.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">Somoy News</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className="block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/daily-star.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">The Daily Star</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className=" block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/janakantho.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">Daily Janakantho</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className="2 block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/jago-news-24.webp" alt="" />
                <h3 className="text-center font-medium text-black text-lg">Jagonews 24</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className=" block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/bangladesh-today.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">Bangladesh Today</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className="block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/bd-news-24.webp" alt="" />
                <h3 className="text-center font-medium text-black text-lg">BD News 24</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className=" block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/channel-i.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">Channel i</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className=" block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/dbc-news.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">DBC News</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className=" block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/ntv.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">NTV</h3>
              </div>
            </MotionWrapScale>
          </div>
          <div className="block">
            <MotionWrapScale>
              <div>
                <img className="w-28 h-28 object-contain border-2 mx-auto border-black  rounded-full" src="/img/media-coverage/rtv-news.png" alt="" />
                <h3 className="text-center font-medium text-black text-lg">RTV News</h3>
              </div>
            </MotionWrapScale>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaCoverage;
