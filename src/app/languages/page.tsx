'use client';
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react-pro';

import Image from 'next/image';
import { FunctionComponent } from 'react';
import LanguagesModule, { useLanguagesInjection } from './languages.module';
import { type Language } from './interfaces';

import { Tooltip1 } from '@lib/components';
import { GoEye } from 'react-icons/go';
import { IoIosAdd } from 'react-icons/io';
import Link from 'next/link';

interface LanguagesProps {}

const languages = [
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
  {
    title: 'Al',
    src: 'https://www.worldometers.info/img/flags/al-flag.gif',
  },
  {
    title: 'Tr',
    src: 'https://www.worldometers.info/img/flags/tu-flag.gif',
  },
];

const Languages: FunctionComponent<LanguagesProps> = () => {
  const module = useLanguagesInjection();
  const languages = module.languagesService.getLanguages(true);
  return (
    <div className="container">
      <div className=" grid lg:grid-cols-4  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
        {languages.map((lan, index) => (
          <Language {...lan} key={index} />
        ))}
      </div>
    </div>
  );
};

const menu = [
  {
    header: 'About Owlegram',
    section: [
      {
        text: 'Add',
        baseHref: '/about/create/',
      },
      {
        text: 'show',
        baseHref: '/about/',
      },
    ],
  },
  {
    header: 'Services',
    section: [
      {
        text: 'Add',
        baseHref: '/services/create-service/',
      },
      {
        text: 'Show',
        baseHref: '/services/',
      },
    ],
  },
  {
    header: 'Teams',
    section: [
      {
        text: 'Add',
        baseHref: '/teams/create/',
      },
      {
        text: 'show',
        baseHref: '/teams/',
      },
    ],
  },
  {
    header: 'Downloads',
    section: [
      {
        text: 'Add',
        baseHref: '/languages/create-service/',
      },
    ],
  },
];
const Language = (props: Language) => {
  return (
    <>
      <div className="tooltip1-hover m-auto w-fit border border-gray-300 !rounded-md  ">
        <div className="w-full  flex flex-col  justify-center items-center ">
          <Link href={'/languages/' + props.id}>
            <Image
              className="h-[150px] min-h-[150px] max-h-[150px] max-w-[200px] object-cover border-b border-gray-300"
              width={300}
              height={150}
              src={props.flag}
              alt="flag"
            />
          </Link>
          <div className="flex flex-col py-6 w-full text-sm font-semibold  text-center  text-neutral-700 ">
            {props.title}
          </div>
        </div>
        <Tooltip1>
          <div className="h-full overflow-auto p-2  ">
            {menu.map((item, index) => (
              <div key={index}>
                <header className="text-white text-sm pb-2 border-b border-white border-solid">
                  {item.header}
                </header>

                <div className="flex flex-wrap py-2 gap-2">
                  {item.section.map((section, index2) => (
                    <Link
                      className="text-xs"
                      key={index2}
                      href={section.baseHref + props.id}
                    >
                      {section.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {/* <CButtonGroup
              vertical
              role="group"
              aria-label="Vertical button group"
              className="mx-auto"
            >
              {menu.map((item, i) => (
                <CButton key={i} color="primary">
                  <Link
                    className="text-[10px] text-white"
                    href={item.baseHref + props.id}
                  >
                    {item.text}
                  </Link>
                </CButton>
              ))}
            </CButtonGroup> */}
          </div>
        </Tooltip1>
      </div>
    </>
  );
};
export default Languages;
