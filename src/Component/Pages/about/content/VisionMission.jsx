import Image1 from "../../../asserts/bob.png";
import Image2 from "../../../asserts/dart.png";
import Image3 from "../../../asserts/image/Img7.webp";

const VisionMission = () => {
  return (
    <div >
      <div className="bg-headerColor md:w-[90%] flex md:flex-row flex-col justify-center items-center rounded-xl space-y-4 pt-5 mx-auto px-6 md:px-[5rem]">
        <div className="md:w-1/2">
          <div>
            <div className="space-y-4 ">
              <img src={Image1} alt="" className="w-[3rem]" />
              <h1 className="font-bold text-2xl">Our Vision</h1>
              <p className="pb-[2rem]">
                To be the leading marine logistics company in Nigeria, setting
                the standard for efficiency, reliability, and innovation in the
                maritime sector.
              </p>
            </div>
            <div className="space-y-4 ">
              <img src={Image2} alt="" className="w-[3rem]" />
              <h1 className="font-bold text-2xl">Our Mission</h1>
              <p className="pb-[2rem]">
                To provide seamless, cost effective, and innovative logistics
                solutions that empower businesses in the maritime industry,
                ensuring the safe and timely movement of goods while fostering
                long term partnerships
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 hidden md:block">
          <img src={Image3} alt="" className="mx-auto  md:h-[80vh] pb-6" />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
