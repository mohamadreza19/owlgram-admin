export const dynamicParams = true;

import { FunctionComponent, useEffect, useState } from "react";

import Create from "../../Create";
import { StaticParams } from "@/app/lib/shared/interfaces";

interface CreateProps extends StaticParams {}

const CreateConnectUs: FunctionComponent<CreateProps> = ({ params }) => {
  return <Create />;
};

export default CreateConnectUs;
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
