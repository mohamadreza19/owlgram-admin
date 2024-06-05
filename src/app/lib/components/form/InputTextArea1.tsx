import { useField } from "formik";
import { Button1 } from "../button";
import React, { ChangeEvent, HTMLAttributes } from "react";
import classNames from "classnames";

interface TextArea1Props extends HTMLAttributes<HTMLTextAreaElement> {}

const TextArea1: React.FC<TextArea1Props> = ({ className, ...rest }) => {
  return (
    <textarea
      cols={10}
      rows={10}
      className={classNames(
        " flex items-center min-h-28 max-h-28 p-1 w-full text-sm text-gray-900 border border-gray-300 rounded-[.25rem] bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",
        className
      )}
      {...rest}
    />
  );
};

export default TextArea1;
