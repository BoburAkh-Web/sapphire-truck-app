import { Fragment } from "react";
import { motion, type Variants } from "motion/react";

const titleVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type SplitTitleProps = {
  text: string;
  className?: string;
};

// Sarlavhani so'zma-so'z paydo qiladi. Ota-element "visible" holatiga o'tganda ishga tushadi.
function SplitTitle({ text, className = "" }: SplitTitleProps) {
  return (
    <motion.h2 variants={titleVariants} className={className}>
      {text.split(" ").map((word, index) => (
        <Fragment key={index}>
          {index > 0 && " "}
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </Fragment>
      ))}
    </motion.h2>
  );
}

export default SplitTitle;
