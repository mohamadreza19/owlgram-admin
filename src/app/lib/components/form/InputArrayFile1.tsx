import { useField } from "formik";
import { Button1 } from "../button";
import React, { ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";

interface InputArrayFile1Props {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  files: File[];
  onClickCloseAndGetFileIndex?: (index: number) => void;
}

const InputArrayFile1: React.FC<InputArrayFile1Props> = ({
  name,
  onChange,
  files,
  onClickCloseAndGetFileIndex,
}) => {
  // function onChangeFile(event: React.ChangeEvent<HTMLInputElement>) {
  //   // formik.setFieldValue('file', event.currentTarget.files[0]);
  //   if (event.currentTarget.files) {
  //     console.log(event.currentTarget.files[0]);
  //   }
  // }
  function clickHiddenInput() {
    const el = document.querySelector(
      `input[name=${name}]`
    ) as HTMLInputElement;

    el.click();
  }

  return (
    <div className=" h-11 max-h-11 flex items-center p-1  w-full  text-sm text-gray-900 border border-gray-300 rounded-[.25rem]  bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
      <Button1 onClick={clickHiddenInput} children="Choose file" />
      <input
        type="file"
        name={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e);
        }}
        className="hidden"
      />
      <div className=" ms-1 text-sm flex gap-x-1 scrollbar-hide overflow-x-auto overflow-y-hidden whitespace-nowrap text-gray-500 dark:text-gray-300">
        {files.map((file, index) => {
          return (
            <div className="flex p-2 bg-white border border-gray-500 border-solid rounded">
              {file.name}
              <IoClose
                onClick={() => {
                  if (onClickCloseAndGetFileIndex) {
                    onClickCloseAndGetFileIndex(index);
                  }
                }}
                className="cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InputArrayFile1;
