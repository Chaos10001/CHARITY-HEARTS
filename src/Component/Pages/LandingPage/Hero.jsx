import Image1 from "../../asserts/image/Img1.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <div ref={ref} className="">
      {/* Desktop */}
      <div className="hidden md:flex flex-row justify-between mx-auto items-center px-7 __hero">
        {isInView && (
          <>
            <motion.div
              className="w-1/2 space-y-6"
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <h1 className="__inter text-3xl text-white">
                CHARITY HEARTS NIGERIA <br /> AND BROS Limited
              </h1>
              <p className="__inter text-lg text-white">
                A leading Marine Logistics company dedicated to providing
                exceptional Marine Logistics to businesses like yours.
              </p>
              <div className="space-x-7 pt-5">
                <motion.button
                  className="bg-primary px-[1.8rem] font-semibold py-[0.8rem] rounded-full text-white"
                  whileHover={{ scale: 1.05 }}
                >
                  About Us
                </motion.button>
                <motion.button
                  className="bg-white px-[1.8rem] font-semibold py-[0.8rem] rounded-full text-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              className="w-2/4"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.img
                src={Image1}
                alt=""
                className="h-[33rem] w-[33rem] rounded-3xl"
                whileHover={{ scale: 1.02 }}
              />
            </motion.div>
          </>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col justify-between mx-auto items-center px-4 __hero__small">
        {isInView && (
          <motion.div
            className="space-y-5 pt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-semibold text-2xl text-headerColor">
              CHARITY HEARTS NIGERIA <br /> AND BROS Limited
            </h1>
            <p className="__inter text-white text-sm">
              A leading Marine Logistics company dedicated to providing
              exceptional Marine Logistics to businesses like yours.
            </p>
            <div className="mt-8">
              <motion.img
                src={Image1}
                alt=""
                className="rounded-2xl"
                whileHover={{ scale: 1.02 }}
              />
            </div>
            <div className="gap-y-5 pt-5 flex flex-col items-center justify-center pb-6">
              <motion.button
                className="bg-primary px-[5rem] font-semibold py-[0.8rem] rounded-full text-white"
                whileHover={{ scale: 1.05 }}
              >
                About Us
              </motion.button>
              <motion.button
                className="bg-white px-[5rem] font-semibold py-[0.8rem] rounded-full text-primary"
                whileHover={{ scale: 1.05 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Hero;
