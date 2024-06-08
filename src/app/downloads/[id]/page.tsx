"use client";
import { FunctionComponent, useEffect } from "react";
import { useDownloadsInjection } from "../downloads.module";
import { useParams } from "next/navigation";
import Card3 from "@/app/lib/components/card/Card3";
import NotContentFound from "@/app/lib/components/NotContentFound";

interface GetByIdProps {}

const GetById: FunctionComponent<GetByIdProps> = () => {
  const module = useDownloadsInjection();
  const downloads = module.downloadsService.getDownloads(true);
  const { id } = useParams<{
    id: string;
  }>();

  useEffect(() => {
    if (id) module.downloadsController.handleFetchDownloadsByLanguageId(id);
  }, [id]);
  if (!downloads.length) return <NotContentFound />;
  return (
    <div className="container grid grid-cols-1">
      {downloads.map((download, index) => (
        <Card3 {...download} key={index} />
      ))}
    </div>
  );
};

export default GetById;
