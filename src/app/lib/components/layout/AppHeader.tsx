import Link from "next/link";
import { useDispatch } from "react-redux";

import {
  CButtonGroup,
  CFormCheck,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from "@coreui/react-pro";
import {
  cilApplicationsSettings,
  cilMenu,
  cilMoon,
  cilSun,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";

import {
  AppHeaderDropdown,
  AppHeaderDropdownMssg,
  AppHeaderDropdownNotif,
  AppHeaderDropdownTasks,
} from "../header";

import AppBreadcrumb from "./AppBreadcrumb";

import { logo } from "../brand/logo";
import { useEffect } from "react";
interface AppHeaderProps {
  toggleSideBar: () => void;
}
const AppHeader = (props: AppHeaderProps): JSX.Element => {
  const dispatch = useDispatch();

  //   const theme = useTypedSelector((state) => state.theme)

  //   useEffect(() => {
  //    theme === 'dark'
  //     ? document.body.classList.add('dark-theme')
  //     : document.body.classList.remove('dark-theme')
  //   }, [theme])

  // theme === 'dark'
  //   ? document.body.classList.add('dark-theme')
  //   : document.body.classList.remove('dark-theme')

  const sidebarShow = false;
  const asideShow = false;

  return (
    <CHeader position="sticky" className="mb-4 !z-20">
      <CContainer fluid>
        <CHeaderToggler className="ps-1" onClick={props.toggleSideBar}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" href="/">
          <CIcon icon={logo} height={48} />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink href="/" component={Link}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-auto me-4">
          <CButtonGroup aria-label="Theme switch">
            <CFormCheck
              type="radio"
              button={{ color: "primary" }}
              name="theme-switch"
              id="btn-light-theme"
              autoComplete="off"
              label={<CIcon icon={cilSun} />}
              //   checked={theme === "default"}
              onChange={() => dispatch({ type: "set", theme: "light" })}
            />
            <CFormCheck
              type="radio"
              button={{ color: "primary" }}
              name="theme-switch"
              id="btn-dark-theme"
              autoComplete="off"
              label={<CIcon icon={cilMoon} />}
              //   checked={theme === "dark"}
              onChange={() => dispatch({ type: "set", theme: "dark" })}
            />
          </CButtonGroup>
        </CHeaderNav>
        <CHeaderNav>
          <AppHeaderDropdownNotif />
          <AppHeaderDropdownTasks />
          <AppHeaderDropdownMssg />
        </CHeaderNav>
        <CHeaderNav className="ms-3 me-4">
          <AppHeaderDropdown />
        </CHeaderNav>
        <CHeaderToggler
          className="px-md-0 me-md-3"
          onClick={() => dispatch({ type: "set", asideShow: !asideShow })}
        >
          <CIcon icon={cilApplicationsSettings} size="lg" />
        </CHeaderToggler>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
