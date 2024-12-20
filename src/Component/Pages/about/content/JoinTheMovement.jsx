import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const JoinTheMovement = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    
    <div id="about" className="py-[6rem] px-2" ref={ref}>
      <div
        className={`bg-headerColor md:w-[90%] h-auto md:h-[60vh] flex flex-col justify-center items-center rounded-xl pt-10 pb-12 mx-auto md:px-[5rem] px-4 ${
          isInView ? "animate-fadeIn" : ""
        }`}
      >
        <h1 className="font-bold text-4xl md:text-5xl text-center mb-6">
          About Us
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <p className="md:text-base text-sm text-center text-lightgrey __ar_one_sans md:mx-[5rem] font-bold leading-relaxed">
            CHARITY HEARTS NIGERIA AND BROS Limited was founded in 2022 with a
            mission to address the systemic and logistics challenges posed on
            businesses in the maritime sector, most especially the movement of
            containers. Our team of experts has over 20 years of combined
            experience in shipping and cargo logistics.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinTheMovement;
