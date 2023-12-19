import React, {
  forwardRef,
  ForwardedRef,
  Ref,
  RefObject,
  useState,
} from "react";
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
    const [isClose, setIsClose] = useState(true);
    const [isMaximize, setIsMaximize] = useState(false);
    const containerRef = ref as Ref<HTMLDivElement>;

    return (
      <>
        {isClose && (
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
            <button onClick={() => setIsClose((prev) => !prev)}>Close</button>
            <button onClick={() => setIsMaximize((prev) => !prev)}>
              Maximize
            </button>
          </motion.div>
        )}
      </>
    );
  }
) as WindowComponent;

Window.Header = DefaultHeader;
Window.BrowserHeader = BrowserHeader;

export default Window;
