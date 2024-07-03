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

import owlgramLogo from "/public/main-logo.svg";
export default function Home() {
  return (
    <div className="w-full container ">
      <CRow>
        <CCol lg={12}>
          <CCard className="mb-3 p-4 background1">
            <h1 className="text-7xl text-white font-extralight ">welcome </h1>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}
const Card = () => {
  return <div>ss</div>;
};
