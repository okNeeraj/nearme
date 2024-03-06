import Image from "next/image";
import {
  MdLocationOn,
  MdAddCall,
  MdOutlineWatchLater,
  MdBusiness,
} from "react-icons/md";

const Intro = () => {
  return (
    <section className="py-10">
      <div className="container m-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <div className="store-info">
              <h1 className="text-2xl font-bold mb-4">
                Vi - Vodafone Idea mini Store
              </h1>
              <div className="store-body">
                <div className="flex mb-3">
                  <div className="info-icon w-8 text-2xl text-primary">
                    <MdLocationOn />
                  </div>
                  <div className="info-text text-sm flex-1">
                    No 85, Saket Colony
                    <br />
                    Shahganj
                    <br />
                    Agra - 282001
                  </div>
                </div>
                <div className="flex mb-3 items-center">
                  <div className="info-icon w-8 text-2xl text-primary">
                    <MdBusiness />
                  </div>
                  <div className="info-text text-sm flex-1">
                    Near Saket Mall
                  </div>
                </div>
                <div className="flex mb-3 items-center">
                  <div className="info-icon w-8 text-2xl text-primary">
                    <MdAddCall />
                  </div>
                  <div className="info-text text-sm flex-1">+91 7401111740</div>
                </div>
                <div className="flex mb-3 items-center">
                  <div className="info-icon w-8 text-2xl text-primary">
                    <MdOutlineWatchLater />
                  </div>
                  <div className="info-text text-sm flex-1 flex gap-4">
                    <span>10:00 AM to 07:00 PM</span>
                    <span className="text-green-700 font-bold">Open Now</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-8/12">
            <Image
              src="/banner_01.jpeg"
              className="rounded-lg"
              alt="text"
              width={1145}
              height={375}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
