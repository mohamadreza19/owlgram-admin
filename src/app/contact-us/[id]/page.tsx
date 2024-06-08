"use client";
import { useParams } from "next/navigation";
import { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { useContactUsInjection } from "../contactUs.module";
import Map1 from "@/app/lib/components/map/Map1";
import Image from "next/image";
import Link from "next/link";
import { SocialNetworksResponse } from "@/app/socialNetworks/interfaces";
import NotContentFound from "@/app/lib/components/NotContentFound";

interface GetContactByIdProps {}

const ContactById: FunctionComponent = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const [socialNetworks, setSocialNetworks] = useState<SocialNetworksResponse>(
    []
  );
  const iconBase = "https://owlegram.com:2053/public/social_networks/instg.jpg";
  const module = useContactUsInjection();
  const contactUs = module.contactUsService.getContactUs(true);

  useEffect(() => {
    module.contactUsController.getContactBasedLanguageId(id);

    module.contactUsController.getSocialNetworks().then((val) => {
      setSocialNetworks(val);
    });
  }, []);

  if (!contactUs.length) return <NotContentFound />;
  return (
    <div className="container grid  grid-cols-1 gap-y-4">
      {contactUs.map((item, index) => {
        return (
          <div
            key={index}
            className="mx-auto border border-solid border-gray-300 rounded-t-lg rounded-b-lg overflow-hidden"
          >
            <Map1 latLong={[Number(item.lat), Number(item.long)]} />

            <div className="py-3 px-2">
              <div className="mb-3 w-full items-center py-1">
                <label className="w-full text-lg font-semibold pb-2 border-b border-solid border-gray-300">
                  Address
                </label>
                <p className="my-3 w-full text-sm text-neutral-600">
                  {item.address}
                </p>
              </div>
              <div className="my-3 w-full items-center py-1">
                <label className="w-full text-lg font-semibold pb-2 border-b border-solid border-gray-300">
                  Social Networks
                </label>
                <div className="my-3 flex gap-2">
                  {item.social_networks.map((network, index2) => {
                    const src = socialNetworks.find(
                      (social) => social.id === network.social_id
                    )?.icon;
                    return (
                      <Link key={index2} href={network.link}>
                        <Image
                          alt=""
                          src={src || ""}
                          width={40}
                          height={40}
                          className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px]  object-contain border border-solid border-gray-300 rounded"
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactById;
