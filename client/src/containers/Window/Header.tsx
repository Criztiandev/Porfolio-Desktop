import Avatar from "@/components/Avatar";
import Dropdown from "@/components/Dropdown";

import {
  toggleClose,
  toggleMaximize,
  toggleMinimize,
} from "@/service/store/slice/window.slice";
import { DragControls, motion } from "framer-motion";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
interface DefaultHeaderProps {
  controls: DragControls;
  title: string;
}

export const DefaultHeader = ({
  title = "Folder 1",
  controls,
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

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <motion.header
      onPointerDown={(e) => controls.start(e)}
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
            onClick={() => dispatch(toggleMinimize())}>
            1
          </button>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => dispatch(toggleMaximize())}>
            2
          </button>
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => dispatch(toggleClose())}>
            3
          </button>
        </div>
      </nav>
    </motion.header>
  );
};

export const BrowserHeader = () => {
  return (
    <header className="border-b-2 border-black">
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
          <span className="btn btn-ghost text-xl">{}</span>
        </div>
        <div className="navbar-end flex gap-2">
          <button className="btn btn-ghost btn-circle">
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
          </button>

          <Dropdown title="Test" className="rounded-full dropdown-end">
            <Avatar
              className=""
              path="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
            <Dropdown.Content>
              <Dropdown.List>HI</Dropdown.List>
            </Dropdown.Content>
          </Dropdown>
        </div>
      </nav>
    </header>
  );
};
