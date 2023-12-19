import { useDragControls } from "framer-motion";
import Window from "../Window";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store";
import { useId } from "react";

const Browser = () => {
  const BID = useId();
  const windowState = useSelector((state: RootState) => state.window[BID]);
  const browserState = useSelector((state: RootState) => state.browser[BID]);

  console.log(browserState);

  const controls = useDragControls();
  return (
    <Window title={BID} controls={controls} {...windowState}>
      <Window.BrowserHeader onPoint={controls} title={BID} />
      <iframe
        title="External Website"
        src={browserState?.search}
        width="800"
        height="600"
      />
    </Window>
  );
};

export default Browser;
