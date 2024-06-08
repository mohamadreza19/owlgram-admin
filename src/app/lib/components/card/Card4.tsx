import { ConnectUs } from "@/app/connect-us/interfaces";
import { Download } from "@/app/downloads/interfaces";
import { CCard, CCardBody, CCardHeader } from "@coreui/react-pro";
import Image from "next/image";
import { FunctionComponent, ReactNode } from "react";

interface Card4Props extends ConnectUs {}

const Card4: FunctionComponent<Card4Props> = ({
  content,
  department,
  email,
  file,
  subject,
}) => {
  return (
    <CCard className="mb-4 min-h-64">
      <CCardHeader>
        <strong>Connect Us</strong>
      </CCardHeader>
      <CCardBody className="overflow-hidden !p-0">
        <Image
          className="w-full !h-48 !static object-cover"
          unoptimized
          fill
          alt="road map "
          src={file}
        />

        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            email
          </label>
          <section className="text-sm">{email}</section>
        </div>
        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            content
          </label>
          <section className="text-sm">{content}</section>
        </div>
        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            department
          </label>
          <section className="text-sm">{department}</section>
        </div>
        <div className="flex flex-col gap-2 my-3 px-2">
          <label className="text-base border-b border-solid pb-2 border-gray-400 ">
            subject
          </label>
          <section className="text-sm">{subject}</section>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default Card4;
