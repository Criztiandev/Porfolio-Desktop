import ReactIcon from "@/assets/react.svg";
import Window from "@/containers/Window";
import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";

const DesktopScreen = () => {
  const controls = useDragControls();
  const parentRef = useRef(null);
  return (
    <div
      className="h-[100vh] grid grid-cols-12 grid-rows-6 gap-4  place-items-center p-4"
      ref={parentRef}>
      <motion.div
        whileTap={{ scale: 1.05 }}
        whileHover={{
          cursor: "pointer",
          border: "1px solid black",
          borderRadius: "5px",
        }}
        className="w-full h-full flex justify-center items-center hover:bg-gray-200/50">
        <div className="flex justify-center items-center flex-col gap-2  w-full h-full">
          <img src={ReactIcon} className="w-16 h-16" />
          <h5 className="font-bold text-lg text-center">Computer</h5>
        </div>
      </motion.div>

      <Window ref={parentRef} controls={controls}>
        <Window.Header title="Folder 1" controls={controls} />
      </Window>
    </div>
  );
};

export default DesktopScreen;
