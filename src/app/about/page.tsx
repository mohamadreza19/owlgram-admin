import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react-pro";
import { FunctionComponent } from "react";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader></CCardHeader>
          <CCardBody>
            {/* <SmartTableBasicExample
              _columns={[
                {
                  key: "title",
                  filter: false,
                },
                {
                  key: "flag",
                  filter: false,
                  sorter: false,
                },
              ]}
              _data={languages}
              _scopedColumns={{
                flag: (item: any) => (
                  <div className="!border !border-gray-200 !border-solid w-11 h-11 rounded-md my-3">
                    <Image
                      fill
                      src={item.flag}
                      alt="flag"
                      className="!static "
                    />
                  </div>
                ),
              }}
            /> */}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default About;
