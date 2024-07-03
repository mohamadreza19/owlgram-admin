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

const data = [
  {
    id: 0,
    name: "John Doe",
    registered: "2018/01/01",
    role: "Guest",
    status: "Pending",
  },
  {
    id: 1,
    name: "Samppa Nori",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 2,
    name: "Estavan Lykos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 3,
    name: "Chetan Mohamed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Derick Maximinus",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 5,
    name: "Friderik Dávid",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 6,
    name: "Yiorgos Avraamu",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 7,
    name: "Avram Tarasios",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 8,
    name: "Quintin Ed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Enéas Kwadwo",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 10,
    name: "Agapetus Tadeáš",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 11,
    name: "Carwyn Fachtna",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 12,
    name: "Nehemiah Tatius",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 13,
    name: "Ebbe Gemariah",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 14,
    name: "Eustorgios Amulius",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 15,
    name: "Leopold Gáspár",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 16,
    name: "Pompeius René",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 17,
    name: "Paĉjo Jadon",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 18,
    name: "Micheal Mercurius",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Ganesha Dubhghall",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 20,
    name: "Hiroto Šimun",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 21,
    name: "Vishnu Serghei",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 22,
    name: "Zbyněk Phoibos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 23,
    name: "Aulus Agmundr",
    registered: "2018/01/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 42,
    name: "Ford Prefect",
    registered: "2001/05/25",
    role: "Alien",
    status: "Don't panic!",
  },
];
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

  useEffect(() => {
    const item = document.querySelector(
      ".page-item .page-link"
    ) as HTMLButtonElement;

    if (item) {
      item.click();
      setTimeout(() => {
        item.click();
      }, 300);
    }
  }, []);
  if (_columns.length > 0)
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
        activePage={3}
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
