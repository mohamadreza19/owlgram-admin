import { FunctionComponent } from "react";

import { StaticParams } from "@/app/lib/shared/interfaces";
import Create from "../../Create";

interface CreateProps extends StaticParams {}

const CreateDownload: FunctionComponent<CreateProps> = ({ params }) => {
  return <Create />;
};

export default CreateDownload;

export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}
