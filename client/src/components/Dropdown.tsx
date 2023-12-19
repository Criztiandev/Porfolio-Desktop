import { BaseProps } from "@/interface/Component";

interface Props extends BaseProps {
  title?: string;
}

interface ContentProps extends BaseProps {
  width?: number;
  height?: number;
}

const Dropdown = ({ children, ...props }: Props) => {
  return (
    <div className={`dropdown ${props.className} overflow-hidden`}>
      {children}
    </div>
  );
};

const Title = ({ children, className }: BaseProps) => {
  return (
    <div
      className={` relative btn border-2 border-black ${
        className && className
      }`}>
      {children}
    </div>
  );
};

const Content = ({
  width = 300,
  height = 200,
  children,
  className,
}: ContentProps) => {
  return (
    <ul
      style={{ width, height }}
      className={`mt-4 p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-md border-2 border-black ${
        className && className
      }`}>
      {children}
    </ul>
  );
};

interface ListProps extends BaseProps {}

const List = ({ children, ...props }: ListProps) => {
  return <li {...props}>{children}</li>;
};

Dropdown.List = List;
Dropdown.Title = Title;
Dropdown.Content = Content;

export default Dropdown;
