"use client";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react-pro";
import Link from "next/link";
import { FunctionComponent, useEffect, useState } from "react";
import Select1 from "../lib/components/select/Select1";
import { useLanguagesInjection } from "../languages/languages.module";
import { Language } from "../languages/interfaces";
import { useContactUsInjection } from "./contactUs.module";
import SmartTableBasicExample from "../lib/components/table/SmartTableBasixExample";
import Image from "next/image";
// import Map1 from "../lib/components/map/Map1";
import dynamic from "next/dynamic";
const Map1 = dynamic(() => import("../lib/components/map/Map1"), {
  ssr: false,
});

interface ContactUsProps {}

const ContactUs: FunctionComponent<ContactUsProps> = () => {
  const { languagesService } = useLanguagesInjection();
  const { contactUsService, contactUsController } = useContactUsInjection();
  const languages = languagesService.getLanguages(true);
  const ContactsUs = contactUsService.getContactUs(true);
  const [language, setLanguage] = useState<Language>();
  function handleSetSelectedOption(language: Language) {
    setLanguage(language);
  }
  useEffect(() => {
    if (language) {
      contactUsController.getContactBasedLanguageId(language.id);
    }
  }, [language, language?.id]);

  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader className="flex flex-col justify-center">
            <h1 className="py-3 text-gray-700">Contact Us</h1>

            <div className=" flex gap-x-3">
              <Link
                href={`/contact-us/create/${language?.id}?lan=${language?.title}`}
              >
                <CButton variant="outline" color={"secondary"}>
                  Add
                </CButton>
              </Link>
              <Select1
                languages={languages}
                handleSelectOption={handleSetSelectedOption}
              />
            </div>
          </CCardHeader>
          <CCardBody>
            <SmartTableBasicExample
              _columns={[
                {
                  key: "address",
                },
                {
                  key: "tel",
                },
                {
                  key: "map",
                  filter: false,
                  sorter: false,
                },
              ]}
              _data={
                ContactsUs
                // languages
              }
              _scopedColumns={{
                map: (item: any) => {
                  return (
                    <>
                      <Map1 latLong={[Number(item.lat), Number(item.long)]} />
                    </>
                  );
                },
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ContactUs;
