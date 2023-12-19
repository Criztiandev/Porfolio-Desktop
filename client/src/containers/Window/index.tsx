import React, { forwardRef, ForwardedRef, Ref, RefObject } from "react";
import { BrowserHeader, DefaultHeader } from "./Header";
import { DragControls, motion } from "framer-motion";
import { BaseProps } from "@/interface/Component";

interface WindowProps extends BaseProps {
  controls: DragControls;
}

interface WindowComponent
  extends React.ForwardRefExoticComponent<
    WindowProps & React.RefAttributes<HTMLDivElement>
  > {
  Header: typeof DefaultHeader;
  BrowserHeader: typeof BrowserHeader;
}

const Window = forwardRef(
  ({ controls, children }: WindowProps, ref: ForwardedRef<HTMLDivElement>) => {
    const containerRef = ref as Ref<HTMLDivElement>;

    return (
      <motion.div
        ref={containerRef}
        drag
        dragElastic={0}
        dragMomentum={false}
        dragControls={controls}
        dragListener={false}
        dragConstraints={ref ? (ref as RefObject<Element>) : false}
        className="absolute w-[800px] h-[500px] border-2 border-black rounded-md overflow-hidden">
        {children}
      </motion.div>
    );
  }
) as WindowComponent;

Window.Header = DefaultHeader;
Window.BrowserHeader = BrowserHeader;

export default Window;
