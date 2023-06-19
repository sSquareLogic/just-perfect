import Image from "next/image";
import { motion } from "framer-motion";

interface IProps {
  checked: boolean;
}

const Check = ({ checked }: IProps) => {
  return (
    <div className="check w-6 h-6 relative">
      <motion.div
        initial={{ opacity: "0%" }}
        animate={checked ? { opacity: "100%" } : {}}
        className="absolute top-0 left-0 w-6 h-6"
      >
        <Image
          src={"/assets/icons/radio-full.svg"}
          alt="check"
          width={24}
          height={24}
          unoptimized
          unselectable="off"
          className="w-6 h-6 object-contain"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: "100%" }}
        animate={checked ? { opacity: "0%" } : {}}
        className="absolute top-0 left-0 w-6 h-6"
      >
        <Image
          src={"/assets/icons/radio-empty.svg"}
          alt="check"
          width={24}
          height={24}
          unoptimized
          unselectable="off"
          className="w-6 h-6 object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Check;
