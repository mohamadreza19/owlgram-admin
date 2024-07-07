"use client";

import {
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
  CRow,
} from "@coreui/react-pro";
import ReactImg from "/public/ReactImg.png";

import background3 from "/public/images/background/background2.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full container ">
      <CRow>
        <CCol lg={12}>
          <div className="background3"></div>
          {/* <div className="relative w-full h-40">
              <Image
                className="object-cover rounded-md"
                alt=""
                fill
                src={background3.src}
              />
            </div> */}
        </CCol>
      </CRow>
    </div>
  );
}
const Card = () => {
  return <div>ss</div>;
};
