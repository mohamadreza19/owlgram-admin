import React from "react";
import { useDispatch } from "react-redux";
// import { useTypedSelector } from './../store'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react-pro";

import AppSidebarNav from "./AppSidebarNav";

import CIcon from "@coreui/icons-react";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import { logoNegative } from "../brand/logo-negative";
import { sygnet } from "..//brand/sygnet";
// sidebar nav config
import navigation from "../_nav";
interface AppSidebarProps {
  isSidebarOpen: boolean;
}
import owlgramLogo from "/public/main-logo.svg";
import Image from "next/image";
const AppSidebar = (props: AppSidebarProps): JSX.Element => {
  const dispatch = useDispatch();
  // const unfoldable = useTypedSelector((state) => state.sidebarUnfoldable)
  // const sidebarShow = useTypedSelector((state) => state.sidebarShow)

  return (
    <>
      <CSidebar
        position="fixed"
        unfoldable={false}
        visible={props.isSidebarOpen}
      >
        <CSidebarBrand className="d-none d-md-flex flex ">
          <Image
            src={owlgramLogo.src}
            width={40}
            height={40}
            alt="owlgramLogo"
          />
          <p className="text-xl text-white font-bold ms-1"> ADMIN</p>
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={navigation} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => dispatch({ type: "set", sidebarUnfoldable: !false })}
        />
      </CSidebar>
    </>
  );
};

export default React.memo(AppSidebar);
