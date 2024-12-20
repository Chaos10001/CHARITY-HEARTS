import Image1 from "../../asserts/771shots_so.png";

const PaymentWithPaypetal = () => {
  return (
    <div className="pt-[7rem]">
      <div className="flex md:flex-row flex-col items-center justify-evenly">
        <div className="w-3/3">
          <img src={Image1} alt="" />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h1 className="font-bold text-center text-3xl">
            Unlock a New World of <br className="hidden md:block" /> Payments
            with PayPetal
          </h1>
          <p className="__inter text-center text-lg ">
            Tap into the power of NFC with PayPetal and enjoy faster,{" "}
            <br className="hidden md:block" />
            easier, and safer transactions.
          </p>
          <div className="pt-5 text-center pb-[6rem]">
            <button className="bg-primary px-[1.8rem] font-semibold py-[0.8rem] rounded-full text-white">
              Join Paypetal Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentWithPaypetal;
