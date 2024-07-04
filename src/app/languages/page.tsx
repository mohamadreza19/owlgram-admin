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
import { FunctionComponent, useEffect, useRef, useState } from 'react';
import LanguagesModule, { useLanguagesInjection } from './languages.module';
import { type Language } from './interfaces';

import { Tooltip1 } from '@lib/components';
import { GoEye } from 'react-icons/go';
import { IoIosAdd } from 'react-icons/io';
import Link from 'next/link';
import SmartTableBasicExample from '../lib/components/table/SmartTableBasixExample';
import { usePathname } from 'next/navigation';

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
  const [forceRender, setForceRender] = useState(0);
  const refId = useRef(null);
  const pathName = usePathname();
  const { languagesController, languagesService } = useLanguagesInjection();
  const languages = languagesService.getLanguages(true);
  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  return (
    <CRow className="container" key={forceRender}>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h1 className="py-3 text-gray-700">Languages</h1>

            <Link href={'/languages/create'}>
              <CButton variant="outline" color={'secondary'}>
                Add
              </CButton>
            </Link>
          </CCardHeader>
          <CCardBody>
            <SmartTableBasicExample
              _columns={[
                {
                  key: 'title',
                  filter: false,
                },
                {
                  key: 'flag',
                  filter: false,
                  sorter: false,
                },
              ]}
              _data={languages}
              _scopedColumns={{
                flag: (item: any) => (
                  <div className="w-full">
                    <section className="!border !border-gray-200 !border-solid w-11 h-11 rounded-md my-3">
                      <Image
                        fill
                        src={item.flag}
                        alt="flag"
                        className="!static "
                      />
                    </section>
                  </div>
                ),
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
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
        text: 'add',
        baseHref: '/downloads/create/',
      },
      {
        text: 'show',
        baseHref: '/downloads/',
      },
    ],
  },
  {
    header: 'Contact Us',
    section: [
      {
        text: 'add',
        baseHref: '/contact-us/create/',
      },
      {
        text: 'show',
        baseHref: '/contact-us/',
      },
    ],
  },
  {
    header: 'Connect Us',
    section: [
      {
        text: 'add',
        baseHref: '/connect-us/create/',
      },
    ],
  },
  {
    header: 'Question And Answer',
    section: [
      {
        text: 'show',
        baseHref: '/question-answer/',
      },
      {
        text: 'add',
        baseHref: '/question-answer/create/',
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
              className="!h-[150px] min-w-[200px] min-h-[150px] max-h-[150px] max-w-[200px] !static object-cover border-b border-gray-300"
              fill
              src={props.flag}
              alt="flag"
            />
          </Link>
          <div className="flex flex-col py-3 w-full text-sm font-semibold  text-center  text-neutral-700 ">
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
