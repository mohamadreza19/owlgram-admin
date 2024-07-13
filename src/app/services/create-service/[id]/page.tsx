export const dynamic = "force-static";

import { FunctionComponent } from "react";
import Create from "../Create";
import { StaticParams } from "@/app/lib/shared/interfaces";

interface CreateServiceProps extends StaticParams {}

const CreateService: FunctionComponent<CreateServiceProps> = ({ params }) => {
  return <Create />;
};

export default CreateService;
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
