import { FunctionComponent, useEffect, useState } from "react";
import {
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CSmartTable,
} from "@coreui/react-pro";

import type {
  Item,
  ScopedColumns,
} from "@coreui/react-pro/dist/components/smart-table/CSmartTableInterface";
import Image from "next/image";

interface Column {
  key?: string;
  _style?: object;
  label?: string;
  filter?: boolean;
  sorter?: boolean;
}

interface SmartTableBasicExampleProps {
  _columns: Column[];
  _data: any[];
  _scopedColumns?: ScopedColumns | undefined;
}

const SmartTableBasicExample: FunctionComponent<
  SmartTableBasicExampleProps
> = ({ _columns, _data, _scopedColumns }) => {
  const [details, setDetails] = useState<number[]>([]);

  return (
    <CSmartTable
      className="CSmartTable"
      sorterValue={{ column: "name", state: "asc" }}
      clickableRows
      tableProps={
        {
          //   striped: true,
          //   hover: true,
        }
      }
      activePage={0}
      // footer
      items={_data}
      columns={_columns as any}
      columnFilter
      tableFilter
      cleaner
      itemsPerPageSelect
      itemsPerPage={5}
      columnSorter
      pagination
      scopedColumns={_scopedColumns}

      // scopedColumns={{
      //   //   status: (item: Item) => (
      //   //     <td>
      //   //       <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
      //   //     </td>
      //   //   ),
      //   //   show_details: (item: Item) => {
      //   //     return (
      //   //       <td className="py-2">
      //   //         <CButton
      //   //           color="primary"
      //   //           variant="outline"
      //   //           shape="square"
      //   //           size="sm"
      //   //           onClick={() => {
      //   //             toggleDetails(item.id);
      //   //           }}
      //   //         >
      //   //           {details.includes(item.id) ? "Hide" : "Show"}
      //   //         </CButton>
      //   //       </td>
      //   //     );
      //   //   },
      //   //   details: (item: Item) => {
      //   //     return (
      //   //       <CCollapse visible={details.includes(item.id)}>
      //   //         <CCardBody>
      //   //           <h4>{item.username}</h4>
      //   //           <p className="text-muted">User since: {item.registered}</p>
      //   //           <CButton size="sm" color="info">
      //   //             User Settings
      //   //           </CButton>
      //   //           <CButton size="sm" color="danger" className="ml-1">
      //   //             Delete
      //   //           </CButton>
      //   //         </CCardBody>
      //   //       </CCollapse>
      //   //     );
      //   //   },
      //   flag: (item: any) => (
      //     <Image src={item.flag} width={40} height={40} alt="flag" />
      //   ),
      // }}
    />
  );
};

export default SmartTableBasicExample;
