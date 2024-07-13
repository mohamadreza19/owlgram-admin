"use client";
export const dynamic = "force-static";
import { Error1, InputNum1, InputTextArea1 } from "@/app/lib/components/form";
import TextInput from "@/app/lib/components/form/InputText1";
import TextArea1 from "@/app/lib/components/form/InputTextArea1";
import Map1 from "@/app/lib/components/map/Map1";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react-pro";
import {
  FormInitalValuesFactory,
  FormSchemaValidatorFactory,
} from "@lib/services";
import { useFormik } from "formik";
import { useParams, useSearchParams } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { useContactUsInjection } from "./contactUs.module";
import { SocialNetworksResponse } from "@/app/socialNetworks/interfaces";
import Image from "next/image";
import { SocialNetworkLink } from "@/app/lib/shared/interfaces";

interface CreateProps {}

const Create: FunctionComponent<CreateProps> = () => {
  const { contactUsController } = useContactUsInjection();
  const [socialNetworks, setSocialNetworks] =
    useState<SocialNetworksResponse>();

  useEffect(() => {
    contactUsController.getSocialNetworks().then((val) => {
      setSocialNetworks(val);
    });
  }, []);
  const { id } = useParams<{
    id: string;
  }>();
  const searchParams = useSearchParams();
  const lan = searchParams.get("lan");
  const formik = useFormik({
    initialValues: FormInitalValuesFactory.createInitalValues6(id),
    validationSchema: FormSchemaValidatorFactory.createSchema6(),
    onSubmit: contactUsController.handleCreateContactUs,

    enableReinitialize: true,
  });

  return (
    <CRow className="container">
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <h1 className="py-3 text-gray-700">
              Create Contact Us For{" "}
              <small className="text-slate-400">{lan}</small>
            </h1>
          </CCardHeader>
          <CCardBody>
            <form onSubmit={formik.handleSubmit} className="container">
              <div className="mx-auto w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Location </label>
                <Map1
                  enableMutate
                  onClickMap={(value) => {
                    formik.setFieldValue("lat", value[0]);
                    formik.setFieldValue("long", value[1]);
                  }}
                  zoom={5}
                  latLong={[10, 10]}
                />
                <Error1 error={formik.errors.lat} />
                <Error1 error={formik.errors.long} />
              </div>
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Address </label>
                <TextArea1 {...formik.getFieldProps("address")} />
                <Error1 error={formik.errors.address} />
              </div>
              <div className="w-full flex flex-col gap-y-3 mb-3">
                <label htmlFor="title">Tel </label>
                <InputNum1 {...formik.getFieldProps("tel")} />
                <Error1 error={formik.errors.tel} />
              </div>

              {socialNetworks?.map((socialNetwork, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex flex-col gap-y-3 mb-3"
                  >
                    <label className="flex" htmlFor="title">
                      {/* <Image
                width={40}
                height={40}
                src={socialNetwork.icon}
                alt="icon"
                className="min-w-[40px] min-h-[40px] object-contain borderr"
              /> */}
                      {socialNetwork.title}
                    </label>

                    <TextInput
                      onChange={(e) => {
                        const value = (e.target as any).value;
                        let social_network: SocialNetworkLink = {
                          link: value,
                          social_id: socialNetwork.id,
                        };

                        const findIndex =
                          formik.values.socialNetworks.findIndex(
                            (s) => s.social_id === socialNetwork.id
                          );

                        if (findIndex >= 0) {
                          const social_networks = [
                            ...formik.values.socialNetworks,
                          ];

                          social_networks.splice(findIndex, 1, social_network);

                          formik.setFieldValue(
                            "socialNetworks",
                            social_networks
                          );
                        } else {
                          const social_networks = [
                            ...formik.values.socialNetworks,
                            social_network,
                          ];
                          formik.setFieldValue(
                            "socialNetworks",
                            social_networks
                          );
                        }
                      }}
                    />
                    {Array.isArray(formik.errors.socialNetworks) &&
                      formik.errors.socialNetworks.map((item, i) => {
                        const index = (item.link as string)[0];
                        if (index === socialNetwork.id) {
                          const newMessage = (item.link as string).replace(
                            index,
                            socialNetwork.title + " "
                          );
                          return <Error1 key={i} error={newMessage} />;
                        }
                      })}
                    {/* {formik.errors.socialNetworks?.length && (
              <Error1
                error={formik.errors.socialNetworks[index].link as string}
              />
            )} */}
                  </div>
                );
              })}

              <CButton type="submit" className="md:w-[300px] w-full mb-3">
                Submit
              </CButton>
            </form>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Create;
