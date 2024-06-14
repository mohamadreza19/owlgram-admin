"use client";
import { useParams } from "next/navigation";
import { FunctionComponent, useEffect } from "react";

import { Navigation, Pagination } from "swiper/modules";

import { Card1 } from "@/app/lib/components/card";
import { useServicesInjection } from "../services.module";
import NotContentFound from "@/app/lib/components/NotContentFound";

interface FlagProps {}

const Flag: FunctionComponent<FlagProps> = () => {
  const { servicesController, servicesService } = useServicesInjection();
  const services = servicesService.getServices(true);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      servicesController.handleFetchServiceBasedLanguageId(id);
    }
  }, [id]);
  if (!services.length) return <NotContentFound />;
  return (
    <div className="w-[300px] container grid grid-cols-1 gap-y-5 pb-3">
      {services.map((item, i) => (
        <Card1 key={i} {...item} />
      ))}
    </div>
  );
};

export default Flag;
