import { BaseProps } from "@/interface/Component";

interface Props extends BaseProps {
  path: string;
}

const Avatar = ({ path, className }: Props) => {
  return (
    <div className={`w-10 rounded-full ${className && className}`}>
      <img alt="Tailwind CSS Navbar component" src={path} />
    </div>
  );
};

export default Avatar;
