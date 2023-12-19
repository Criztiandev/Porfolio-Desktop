import React, {
  forwardRef,
  ForwardedRef,
  Ref,
  RefObject,
  useRef,
  useState,
  useEffect,
} from "react";
import { BrowserHeader, DefaultHeader } from "./Header";
import { DragControls, motion } from "framer-motion";
import { BaseProps } from "@/interface/Component";
import { WindowState } from "@/service/store/slice/window.slice";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store";

interface WindowProps extends BaseProps, WindowState {
  title: string;
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
    const [active, setActive] = useState(false);
    const outerRef = useRef<HTMLDivElement>(null);
    const containerRef = ref as Ref<HTMLDivElement>;
    const isPreview = isMinimize || isClose;

    const handleActive = () => {
      setActive(true);
    };

    const handleClickOutSide = (e: MouseEvent) => {
      if (outerRef.current && !outerRef.current.contains(e.target as Node)) {
        setActive(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutSide);
      document.addEventListener("drag", handleClickOutSide);
      return () => {
        document.addEventListener("mousedown", handleClickOutSide);
        document.removeEventListener("drag", handleClickOutSide);
      };
    }, []);

    return (
      <>
        <div ref={outerRef}>
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
                zIndex: active ? 99 : 0,
              }}
              onMouseDown={handleActive}
              onDragEnter={handleActive}
              className="fixed border-2 border-black rounded-md overflow-hidden bg-white">
              {children}
            </motion.div>
          )}
        </div>
      </>
    );
  }
) as WindowComponent;

Window.Header = DefaultHeader;
Window.BrowserHeader = BrowserHeader;

export default Window;
