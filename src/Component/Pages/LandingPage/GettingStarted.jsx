import image1 from "../../asserts/card.png";
import image2 from "../../asserts/tapanywhere.png";
import image3 from "../../asserts/track.png";
const GettingStarted = () => {
  return (
    <div className="pt-[8rem]">
      <div className="pb-9">
        <h1 className="font-bold md:text-3xl text-2xl text-center mx-8">
          Getting Started with PayPetal is <br className="hidden md:block" />{" "}
          Simple—Just Tap and Go
        </h1>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-y-9 md:space-x-4">
        <div className="bg-headerColor rounded-md md:w-[22rem] w-[20rem]">
          <div className="px-2 py-3 space-y-6">
            <h1 className="text-center font-bold text-2xl">
              Add Your Cards in <br /> Seconds
            </h1>
            <p className="text-center __ar_one_sans">
              Link all your cards to PayPetal—no paperwork, just a few taps.
            </p>
            <img src={image1} alt="" className="mx-auto md:h-[21.5rem]" />
          </div>
        </div>
        <div className="bg-headerColor rounded-md md:w-[22rem] w-[20rem]">
          <div className="px-2 space-y-7">
            <img src={image2} alt="" className="mx-auto md:h-[23rem]" />
            <h1 className="text-center font-bold text-2xl">
              Tap to Pay Anywhere
            </h1>
            <p className="text-center __ar_one_sans">
              Use NFC technology to make secure payments anywhere PayPetal is
              accepted. No cards, just your phone.
            </p>
          </div>
        </div>
        <div className="bg-headerColor rounded-md md:w-[22rem] w-[20rem] ">
          <div className="px-4 py-3  space-y-7">
            <h1 className="text-center  font-bold text-2xl">
              Track Your Spending in Real-Time
            </h1>
            <p className="text-center __ar_one_sans">
              Check your spending insights and take control of your finances
              with every transaction.
            </p>
            <img src={image3} alt="" className="mx-auto md:h-[19.4rem]" />
          </div>
        </div>
      </div>
      <div className="mt-[5rem] text-center">
        <button className="bg-primary px-[1.8rem] py-[0.5rem] rounded-full text-white">
          Explore NFC Power
        </button>
      </div>
    </div>
  );
};

export default GettingStarted;
