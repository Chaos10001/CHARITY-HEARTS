import { motion } from "framer-motion";
import Img1 from "../../../asserts/differntnet.png";
import Img2 from "../../../asserts/differentwallet.png";
import Img3 from "../../../asserts/differentanalysis.png";
import Img4 from "../../../asserts/differentatom.png";
import { useRef } from "react";

const cardData = [
  {
    title: "Proven Track Record of Success",
    description:
      "From small businesses to large enterprises, our commitment to excellence ensures that we deliver measurable outcomes every time.",
    image: Img1,
    bgColor: "bg-headerColor",
  },
  {
    title: "Industry-Recognized Certifications",
    description:
      "Our team members are certified experts, ensuring that the solutions we provide are not only effective but also compliant with best practices and the latest industry standards.",
    image: Img2,
    bgColor: "bg-deepPurple",
    textColor: "text-white",
  },
  {
    title: "Strategic Partnerships",
    description:
      "Our strategic partnerships give us access to cutting-edge tools, resources, and insights that help us deliver innovative and competitive services to meet your needs.",
    image: Img3,
    bgColor: "bg-headerColor",
  },
  {
    title: "Flexible and Adaptable Solutions",
    description:
      "Our solutions are tailored to adapt to your specific needs, whether you require scalable services or custom-built strategies. We are committed to adjusting our approach to fit your goals, ensuring maximum impact and efficiency.",
    image: Img4,
    bgColor: "bg-headerColor",
  },
];

const Card = ({
  title,
  description,
  image,
  bgColor,
  textColor = "text-graytext",
}) => (
  <motion.div
    className={`${bgColor} relative md:w-[90%] h-[40vh] flex flex-col justify-center items-center rounded-xl p-6 mx-auto`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
  >
    <h1 className={`font-bold md:text-2xl text-xl text-center ${textColor}`}>
      {title}
    </h1>
    <p className={`pb-12 text-center ${textColor} __ar_one_sans`}>
      {description}
    </p>
    <div className="absolute bottom-0 left-[75%]">
      <img src={image} alt={title} className="w-[90%]" />
    </div>
  </motion.div>
);

const PaypetalDifferent = () => {
  const ref = useRef(null);
  return (
    <div id="choose" ref={ref}>
      <h1 className="font-bold md:text-3xl text-2xl text-center mx-8">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:mt-[4rem] mt-[2rem] px-4">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default PaypetalDifferent;
