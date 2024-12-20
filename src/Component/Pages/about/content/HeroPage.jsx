import Image1 from "../../../asserts/771shots_so.png";

const HeroPage = () => {
  return (
    <div className="bg-aboutColor">
      <div className="hidden md:flex flex-row justify-between mx-auto items-center px-[6rem] md:h-[180vh] xl:h-[80vh] h-1/2">
        <div className="w-1/2 space-y-2">
          <h2 className="text-lg __inter text-primary">About Us</h2>
          <h1 className="__inter text-5xl">
            Redefining the Way <br /> Africa Pays
          </h1>
          <p className=" text-md">
            Effortless, secure, and contactless <br /> payments for everyone.
          </p>
          <div className="pt-5">
            <button className="bg-primary px-[1.8rem] font-semibold py-[0.8rem] rounded-full text-white">
              Join Paypetal Today
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img src={Image1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
