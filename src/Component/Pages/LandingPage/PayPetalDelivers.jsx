import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image2 from "../../asserts/image/Img2.jpg";
import Image4 from "../../asserts/image/Img3.jpg";
import Image6 from "../../asserts/image/Img4.jpg";
import Image8 from "../../asserts/image/Img1.jpg";

const PayPetalDelivers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pt-[6rem]" ref={ref}>
      <div className="pb-[3rem]">
        <h1 className="font-bold md:text-3xl text-2xl text-center mx-8">
          Our Services/Products
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-10 mx-5">
        <motion.div
          className="bg-headerColor md:w-[37rem] rounded-xl space-y-4 pt-5 mx-auto px-5"
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 2 }}
        >
          <h1 className="font-bold text-xl">Haulage and Container Transfers</h1>
          <p>
            We specialize in the transfer of imported, exported, and empty
            containers, offering secure and hassle-free services that protect
            your investments.
          </p>
          <div>
            <img
              src={Image2}
              alt="Haulage and Container Transfers"
              className="h-[23rem] mb-5 w-[80%] mx-auto rounded-xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-headerColor md:w-[37rem] rounded-xl space-y-4 pt-5 mx-auto px-5"
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 2 }}
        >
          <h1 className="font-bold text-xl">
            Barge and Tugboat Transportation
          </h1>
          <p>
            As a licensed barge and tugboat operator, we facilitate the movement
            of containerized goods along rivers, canals, and other water routes,
            ensuring efficient and reliable delivery.
          </p>
          <div>
            <img
              src={Image4}
              alt="Barge and Tugboat Transportation"
              className="h-[20rem] w-[80%] mx-auto rounded-xl mb-6"
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-headerColor md:w-[37rem] rounded-xl space-y-4 pt-5 mx-auto px-5"
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 2 }}
        >
          <h1 className="font-bold text-xl">International Safety Standards</h1>
          <p className="pb-[2rem]">
            Our operations comply with international best practices for barge
            safety, terminal guidelines, and barge handling procedures to ensure
            secure and efficient services.
          </p>
          <div>
            <img
              src={Image6}
              alt="International Safety Standards"
              className="h-[23rem] mb-5 w-[80%] mx-auto rounded-xl"
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-headerColor md:w-[37rem] rounded-xl space-y-4 pt-5 mx-auto px-5"
          initial={{ opacity: 0, y: 200 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          transition={{ duration: 2 }}
        >
          <h1 className="font-bold text-xl">Cargo Capacity and Flexibility</h1>
          <p>
            We offer medium and large-capacity barges adaptable to various cargo
            types, making us essential for transporting containers between
            inland ports.
          </p>
          <div>
            <img
              src={Image8}
              alt="Cargo Capacity and Flexibility"
              className="h-[23rem] w-[80%] mx-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PayPetalDelivers;
