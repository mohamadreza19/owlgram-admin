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
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In As Admin</p>
                    <CInputGroup className="pb-4 relative">
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
                          className="px-4"
                        >
                          Login
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              {/* <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Link href="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard> */}
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
