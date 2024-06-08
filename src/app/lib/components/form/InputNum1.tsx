import { useField } from "formik";
import { Button1 } from "../button";
import React, { ChangeEvent, HTMLAttributes } from "react";
import classNames from "classnames";

interface InputNum1Props extends HTMLAttributes<HTMLInputElement> {}

const InputNum1: React.FC<InputNum1Props> = ({ className, ...rest }) => {
  return (
    <input
      className={classNames(
        "h-11 max-h-11 flex items-center p-1 w-full text-sm text-gray-900 border border-gray-300 rounded-[.25rem] bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
        className
      )}
      type="number"
      {...rest}
    />
  );
};

export default InputNum1;
