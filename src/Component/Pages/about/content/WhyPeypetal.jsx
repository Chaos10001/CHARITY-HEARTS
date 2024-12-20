import Image1 from "../../../asserts/whypaypetal.png";

const WhyPeypetal = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex md:flex-row flex-col items-center justify-between w-full max-w-[1200px] mx-auto">
        <div className="w-full md:w-[33rem] flex justify-center">
          <img src={Image1} alt="" className="h-[25rem] max-w-full" />
        </div>
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="font-bold text-3xl">Why Paypetal?</h1>
          <p className="__inter text-lg">
            At Paypetal, we believe payments should be effortless, secure, and
            accessible to everyone. That’s why we’ve built a groundbreaking
            platform powered by NFC technology—the future of contactless
            payments. Whether you’re paying for groceries, managing cards, or
            analyzing expenses, Paypetal combines all your financial tools into
            one sleek, user-friendly app.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyPeypetal;
