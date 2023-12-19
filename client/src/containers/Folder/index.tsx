import { useDragControls } from "framer-motion";
import Window from "../Window";
import { useSelector } from "react-redux";
import { RootState } from "@/service/store";
import { useId } from "react";

const Folder = () => {
  const FID = useId();
  const windowState = useSelector((state: RootState) => state.window[FID]);
  const controls = useDragControls();
  return (
    <Window controls={controls} {...windowState}>
      <Window.Header FID={FID} title={`Folder`} onPoint={controls} />
    </Window>
  );
};

export default Folder;
