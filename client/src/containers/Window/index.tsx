import React, { forwardRef, ForwardedRef, Ref, RefObject } from "react";
import { BrowserHeader, DefaultHeader } from "./Header";
import { DragControls, motion } from "framer-motion";
import { BaseProps } from "@/interface/Component";

interface WindowProps extends BaseProps {
  isMaximize: boolean;
  isClose: boolean;
  isMinimize: boolean;
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
  (
    { isMaximize, isClose, isMinimize, controls, children }: WindowProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const containerRef = ref as Ref<HTMLDivElement>;
    const isPreview = isMinimize || isClose;
    return (
      <>
        {!isPreview && (
          <motion.div
            ref={containerRef}
            drag
            dragElastic={0}
            dragMomentum={false}
            dragControls={controls}
            dragListener={false}
            dragConstraints={ref ? (ref as RefObject<Element>) : false}
            style={{
              width: isMaximize ? "100%" : 800,
              height: isMaximize ? "100%" : 500,
            }}
            className="absolute border-2 border-black rounded-md overflow-hidden bg-white">
            {children}
          </motion.div>
        )}
      </>
    );
  }
) as WindowComponent;

Window.Header = DefaultHeader;
Window.BrowserHeader = BrowserHeader;

export default Window;
