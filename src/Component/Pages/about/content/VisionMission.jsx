import Image1 from "../../../asserts/bob.png";
import Image2 from "../../../asserts/dart.png";
import Image3 from "../../../asserts/771shots_so.png";

const VisionMission = () => {
  return (
    <div>
      <div className="bg-headerColor md:w-[90%] flex flex-row justify-center items-center rounded-xl space-y-4 pt-5 mx-auto px-[5rem]">
        <div className="md:w-1/2">
          <div>
            <div className="space-y-4 ">
              <img src={Image1} alt="" className="w-[3rem]" />
              <h1 className="font-bold text-2xl">Our Vision</h1>
              <p className="pb-[2rem]">
                To lead the fintech revolution in Africa by delivering
                innovative, technology-driven payment solutions that empower
                individuals and businesses to thrive.
              </p>
            </div>
            <div className="space-y-4 ">
              <img src={Image2} alt="" className="w-[3rem]" />
              <h1 className="font-bold text-2xl">Our Mission</h1>
              <p className="pb-[2rem]">
                We’re on a mission to simplify and enhance everyday transactions
                through cutting-edge NFC technology. By eliminating friction in
                payments, we’re not just improving financial convenience; we’re
                setting a new standard for secure and seamless transactions
                across Africa.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <img src={Image3} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
