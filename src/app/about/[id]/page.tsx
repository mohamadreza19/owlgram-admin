"use client";
import { useParams } from "next/navigation";
import { FunctionComponent, useEffect } from "react";
import { useLanguagesInjection } from "../../languages/languages.module";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { AboutOwlgram } from "../../languages/interfaces";
import { Slider1 } from "@/app/lib/components/slider";
import { Card1 } from "@/app/lib/components/card";
import { useAboutInjection } from "../about.module";
import NotContentFound from "@/app/lib/components/NotContentFound";

interface FlagProps {}

const Flag: FunctionComponent<FlagProps> = () => {
  const module = useAboutInjection();
  const aboutOwlgram = module.aboutService.getAboutLanguage(true);
  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    if (id) {
      module.aboutController.handleFetchAboutLanguageById(id);
    }
  }, [id]);

  if (!aboutOwlgram.length) return <NotContentFound />;
  else
    return (
      <div className="w-[300px] container grid grid-cols-1 gap-y-5 pb-3">
        {aboutOwlgram.map((item, i) => (
          <Card1 key={i} {...item} />
        ))}
      </div>
    );
};

export default Flag;
