import Cardlider1 from "../../content/Slider1";
import Cardlider2 from "../../content/Slider2";

const SecurePayment = () => {
  return (
    <div className="pt-[7rem]">
      <div className="space-y-4">
        <h1 className="font-bold md:text-3xl text-2xl text-center mx-8">
          Trusted by Thousands for <br className="hidden md:block" /> Seamless,
          Secure Payments
        </h1>
        <p className="__ar_one_sans text-lg text-center mx-8">
          See what makes PayPetal the go-to choice for effortless, secure{" "}
          <br className="hidden md:block" />
          payments.
        </p>
      </div>
      <div className="pt-[3rem]">
        <Cardlider1 />
        <div className="pt-5">
          <Cardlider2 />
        </div>
      </div>
    </div>
  );
};

export default SecurePayment;
