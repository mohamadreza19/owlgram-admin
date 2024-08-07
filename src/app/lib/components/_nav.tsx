import React, { ElementType } from 'react';
import {
  cilBell,
  cilCalculator,
  cilCalendar,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilEnvelopeOpen,
  cilGrid,
  cilLayers,
  cilMap,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilSpreadsheet,
  cilStar,
  cilLanguage,
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react-pro';

export type Badge = {
  color: string;
  text: string;
};

export type NavItem = {
  component: string | ElementType;
  name: string | JSX.Element;
  icon?: string | JSX.Element;
  badge?: Badge;
  href?: string;
  items?: NavItem[];
};

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    // icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    // badge: {
    //   color: "info-gradient",
    //   text: "NEW",
    // },
    href: '/',
  },
  // {
  //   component: CNavTitle,
  //   name: "Languages",
  // },
  // {
  //   component: CNavItem,
  //   name: "Create",
  //   href: "/languages/create",
  // },
  {
    component: CNavItem,
    name: 'Languages ',
    href: '/languages',
    // icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'About ',
    href: '/about',
  },
  {
    component: CNavItem,
    name: 'Services ',
    href: '/services',
  },
  {
    component: CNavItem,
    name: 'Teams ',
    href: '/teams',
  },

  {
    component: CNavItem,
    name: 'Road Maps',
    href: '/roadmaps',
  },
  {
    component: CNavItem,
    name: 'Downloads',
    href: '/downloads',
  },

  {
    component: CNavItem,
    name: 'Contact Us',
    href: '/contact-us',
  },

  {
    component: CNavItem,
    name: 'Connect Us',
    href: '/connect-us',
  },
  {
    component: CNavItem,
    name: 'Question Answer',
    href: '/question-answer',
  },
];

export default _nav;
