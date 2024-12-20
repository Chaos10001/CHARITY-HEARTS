import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-headerColor ">
      <div className="flex md:flex-row flex-col justify-between px-9 pt-7 gap-y-10">
        <div className="space-y-4">
          <div className="flex flex-row items-center gap-x-3">
            <h1 className="text-primary font-bold text-xl">
              CHARITY HEARTS NIGERIA AND BROS Limited
            </h1>
          </div>
          <div>
            <p className="text-footerColor">
              Barge operations in Nigeria is regulated by the Nigeria Ports
              Authority <br />
              NPA, NIWA, NIMASA and additionally in Lagos State, LIWA.
            </p>
          </div>
          <div className="flex flex-row space-x-7 pt-7">
            <FaInstagram className="text-2xl text-primary" />
            <FaXTwitter className="text-2xl text-primary" />
            <FaFacebookF className="text-2xl text-primary" />
            <FaLinkedin className="text-2xl text-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="font-bold text-2xl text-primary">Company</h1>
          <p className="text-footerColor pt-3">About</p>
          <p className="text-footerColor">Service</p>
          <p className="text-footerColor">Why Choose Us</p>
          <p className="text-footerColor">How We Can Help</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-2xl text-primary">Help</h1>
          <p className="text-footerColor pt-3">Contact Us</p>
          <p className="text-footerColor">Support</p>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-2xl text-primary">Legal</h1>
          <p className="text-footerColor pt-3">Terms & Conditions</p>
          <p className="text-footerColor">Privacy Policy</p>
        </div>
      </div>
      <div className="pt-[6rem] pb-[2rem]">
        <h1 className="text-center">
          ©2024 CHARITY HEARTS NIGERIA AND BROS Limited. All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
