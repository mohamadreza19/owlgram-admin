"use client";
import { FunctionComponent, useEffect } from "react";
import { useConnectUsInjection } from "./connectUs.module";
import Card4 from "../lib/components/card/Card4";
import NotContentFound from "../lib/components/NotContentFound";

interface ConnectUsProps {}

const ConnectUs: FunctionComponent<ConnectUsProps> = () => {
  const module = useConnectUsInjection();
  const connectUs = module.connectUsService.getConnectUs(true);

  useEffect(() => {
    module.connectUsController.fetchConnectUs();
  }, []);
  if (!connectUs.length) return <NotContentFound />;
  return (
    <div className="container">
      {connectUs.map((item, index) => {
        return <Card4 key={index} {...item} />;
      })}
    </div>
  );
};

export default ConnectUs;
