import { useDragControls } from "framer-motion";
import Window from "../Window";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store";
import { useId } from "react";

const Browser = () => {
  const BID = useId();
  const windowState = useSelector((state: RootState) => state.window[BID]);
  const controls = useDragControls();
  return (
    <Window controls={controls} {...windowState}>
      <Window.BrowserHeader onPoint={controls} />
    </Window>
  );
};

export default Browser;
