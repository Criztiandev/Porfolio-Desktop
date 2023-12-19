import Browser from "@/containers/Browser";
import { useRef } from "react";

const DesktopScreen = () => {
  const parentRef = useRef(null);

  return (
    <div
      className="h-[100vh] grid grid-cols-12 grid-rows-6 gap-4  place-items-center p-4 overflow-hidden"
      ref={parentRef}>
      <Browser />
    </div>
  );
};

export default DesktopScreen;
