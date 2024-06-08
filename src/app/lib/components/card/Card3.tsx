import { Download } from "@/app/downloads/interfaces";
import { CCard, CCardBody, CCardHeader } from "@coreui/react-pro";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

interface Card2Props extends Download {}

const Card3: FunctionComponent<Card2Props> = ({
  image,
  link,
  os_name,
  product,
}) => {
  return (
    <CCard className="mb-4 min-h-64">
      <CCardHeader>
        <strong>Download</strong>
      </CCardHeader>
      <CCardBody className="overflow-hidden !p-0">
        <Image
          className="w-full !h-48 !static object-cover"
          unoptimized
          fill
          alt="road map "
          src={image}
        />

        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            Link
          </label>
          <section className="text-sm">{link}</section>
        </div>
        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            Os Name
          </label>
          <section className="text-sm">{os_name}</section>
        </div>
        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            Product
          </label>
          <section className="text-sm">{product}</section>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default Card3;
