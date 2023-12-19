/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/Button";
import { handleSearch } from "@/service/store/slice/browser.slice";

import {
  toggleClose,
  toggleMaximize,
  toggleMinimize,
} from "@/service/store/slice/window.slice";
import { DragControls, motion } from "framer-motion";
import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
  SyntheticEvent,
} from "react";
import { useDispatch } from "react-redux";

interface DefaultHeaderProps {
  FID: string;
  onPoint: DragControls;
  title: string;
}

interface BrowserHeaderProps {
  title: string;
  onPoint: DragControls;
}

export const DefaultHeader = ({
  title = "Folder 1",
  onPoint,
  FID,
}: DefaultHeaderProps) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [rename, setRename] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleRename = (e: ChangeEvent<HTMLInputElement>) => {
    setRename(e.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setActive(false);
    }
  };

  const handleEnterPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && active) {
      setActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("keypress", handleEnterPress as any);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("keypress", handleEnterPress as any);
    };
  }, [active]); // Include 'active' as a dependency

  return (
    <motion.header
      onPointerDown={(e) => onPoint.start(e)}
      className="border-b-2 border-black">
      <nav className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          {active ? (
            <input
              ref={inputRef}
              type="text"
              className="input w-full max-w-xs border-2 border-black font-bold "
              value={rename}
              onChange={handleRename}
            />
          ) : (
            <button
              className="btn btn-ghost text-xl"
              onDoubleClick={() => setActive((prev) => !prev)}>
              {rename || title}
            </button>
          )}
        </div>
        <div className="navbar-end">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => dispatch(toggleMinimize(FID))}>
            1
          </button>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => dispatch(toggleMaximize(FID))}>
            2
          </button>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => dispatch(toggleClose(FID))}>
            3
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export const BrowserHeader = ({ title, onPoint }: BrowserHeaderProps) => {
  const [search, setSearch] = useState<string>("www.google.com");
  const dispatch = useDispatch();

  const _handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(handleSearch({ id: title, search: search }));
  };

  return (
    <motion.header
      onPointerDown={(e) => onPoint.start(e)}
      className="border-b-2 border-black">
      <nav className="navbar bg-base-100 ">
        <div className="navbar-start flex gap-2">
          <Button className="bg-orange-400/50 btn-sm btn-circle"></Button>
          <Button className="bg-orange-400/50 btn-sm btn-circle"></Button>
          <Button className="bg-orange-400/50 btn-sm btn-circle"></Button>
        </div>
        <div className="navbar-center flex gap-2">
          <div className="flex gap-2">
            <Button className="btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black">
                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
              </svg>
            </Button>
            <Button className="btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black">
                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
              </svg>
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              className="input border-2 border-black w-[320px] font-semibold text-xl"
              value={search}
              onChange={_handleSearch}
            />
            <Button type="submit" className="btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Button>
          </form>
        </div>
      </nav>
    </motion.header>
  );
};
