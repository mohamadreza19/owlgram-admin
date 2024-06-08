import Link from "next/link";
import { FunctionComponent } from "react";

interface NotContentFoundProps {}

const NotContentFound: FunctionComponent<NotContentFoundProps> = () => {
  return (
    <div className="container">
      <h2>Not Content Found</h2>
      <p className="mt-3">
        pls go <Link href={"/languages"}>languages</Link> page and add Content
      </p>
    </div>
  );
};

export default NotContentFound;
