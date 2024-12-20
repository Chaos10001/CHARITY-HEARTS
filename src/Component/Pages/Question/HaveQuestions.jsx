import { Link } from "react-router-dom";
import circle from "../../asserts/image/circle.svg";

const HaveQuestions = () => {
  return (
    <div className=" pb-6 h-fit pt-[8rem]">
      <h1 className="text-center text-dark text-lg md:text-4xl">
        Have Questions? We&apos;re Here to Help!
      </h1>
      <p className="text-[#484949] my-3 text-center w-[90%] md:w-[55%] mx-auto font-arOneSans">
        {" "}
        we&apos;re here to assist you every step of the way. Feel free to reach
        out to our dedicated support team, and we&apos;ll provide you with the
        answers and guidance you need.
      </p>
      <div className="md:mt-12 flex items-center justify-between gap-y-10 flex-col md:flex-row w-full p-3 md:p-6 md:w-[80%] mx-auto relative">
        <div className="">
          <div className="z-10 relative rounded-md border w-[80%] md:w-[75%] mx-auto border-primary flex flex-col items-center justify-between  bg-white p-4 text-[#484949] font-arOneSans">
            <h3 className="text-center font-youngSerif text-lg font-semibold h-[]">
              Contact Us
            </h3>
            <p className="text-center">
              Our support team is available during the following hours
            </p>
            <div className="flex md:flex-row flex-col gap-y-5 items-center justify-between w-full">
              <div>
                <Link style={{ textDecoration: "underline" }}>
                  Phone number
                </Link>
                <p className="mt-1">08139148807</p>
                <p>08032283700</p>
              </div>
              <div>
                <h1
                  style={{ textDecoration: "underline" }}
                  className="text-center"
                >
                  Email address
                </h1>
                <p className="md:mt-7">charityhearts@gmail.com</p>
              </div>
            </div>
          </div>
          <img
            src={circle}
            alt="its a circle"
            className="-translate-y-12 md:-translate-y-16 md:max-w-md"
          />
        </div>
        <div className="">
          <div className=" z-10 relative h-56 w-[80%] md:w-[75%] mx-auto rounded-md border border-primary flex flex-col items-center justify-between  bg-white p-4 text-[#484949] font-arOneSans">
            <h3 className="text-center font-youngSerif text-lg font-semibold">
              Office Hours:
            </h3>
            <p className="text-center">
              Our support team is available during the following hours
            </p>
            <ul className="list-disc pl-2 text-sm">
              <li>Monday to Friday: [8:00 am-7:00 pm]</li>
              <li>Saturday and Sunday: [8:00 am-10:00 pm]</li>
            </ul>
          </div>
          <img
            src={circle}
            alt="its a circle"
            className="-translate-y-12 md:-translate-y-16 md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default HaveQuestions;
