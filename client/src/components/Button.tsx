import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ className, children, ...props }: Props) => {
  return (
    <motion.div whileTap={{ scale: 0.8 }}>
      <button
        className={`btn ${className && className} border-2 border-black`}
        {...props}>
        {children}
      </button>
    </motion.div>
  );
};

export default Button;
