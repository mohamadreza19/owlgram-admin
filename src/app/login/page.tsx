"use client";
import Link from "next/link";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react-pro";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import * as Yup from "yup";
import { Formik, useFormik } from "formik";
import LoginModule, { useLoginInjection } from "./login.module";
import { LoginPostBody } from "./interfaces";

import owlgramLogo from "/public/main-logo.svg";
import Image from "next/image";

const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const initialValues: LoginPostBody = {
  username: "",
  password: "",
};
const Login = () => {
  const { loginController, loginService } = useLoginInjection();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: loginController.handleLogin,
  });

  return (
    <div className=" min-vh-100 d-flex flex-row align-items-center background1">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>

                    <CInputGroup className="py-4 relative">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => {
                          formik.setFieldValue("username", e.target.value);
                        }}
                        placeholder="Username"
                        autoComplete="username"
                      />
                      <div className="text-rose-700 absolute bottom-[0]">
                        {formik.errors.username}
                      </div>
                    </CInputGroup>
                    <CInputGroup className="pb-4 relative">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        onChange={(e) => {
                          formik.setFieldValue("password", e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                      <div className="text-rose-700 absolute bottom-[0]">
                        {formik.errors.password}
                      </div>
                    </CInputGroup>

                    <CRow>
                      <CCol xs={6}>
                        <CButton
                          onClick={formik.submitForm}
                          color="primary"
                          className="px-4 mt-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white  py-5 flex flex-col items-center justify-center"
                style={{ width: "44%" }}
              >
                <Image
                  src={owlgramLogo.src}
                  width={140}
                  height={140}
                  alt="owlgramLogo"
                />

                <p className="font-bold text-black text-xl pt-6">OWLEGRAM </p>
                <p className="text-[#30363F] text-[12px]">
                  Messenger & Service
                </p>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default function LoginLayout() {
  return (
    <LoginModule>
      <Login />
    </LoginModule>
  );
}
