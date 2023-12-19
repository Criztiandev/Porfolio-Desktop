import { BaseProps } from "@/interface/Component";

interface Props extends BaseProps {
  path: string;
}

const Avatar = ({ path, className }: Props) => {
  return (
    <div
      className={`avatar w-12 rounded-full ${
        className && className
      } overflow-hidden border-2 border-black`}>
      <img alt="Tailwind CSS Navbar component" src={path} />
    </div>
  );
};

export default Avatar;
