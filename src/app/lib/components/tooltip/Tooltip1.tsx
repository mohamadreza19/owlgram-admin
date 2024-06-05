import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import { IoIosAdd } from "react-icons/io";
import { GoEye } from "react-icons/go";

interface Tooltip1Props {
  children: ReactNode;
}

const Tooltip1: FunctionComponent<Tooltip1Props> = ({ children }) => {
  return (
    <div className="tooltip1-trigger top-0 right-0 w-full h-full  bg-gray-700  ">
      {children}
    </div>
  );
};

export default Tooltip1;
