import { CCard, CCardBody, CCardHeader } from '@coreui/react-pro';
import Image from 'next/image';
import { FunctionComponent } from 'react';

interface Card2Props {
  title: string;
  src: string;
}

const Card2: FunctionComponent<Card2Props> = ({ title, src }) => {
  return (
    <CCard className="mb-4 !h-64">
      <CCardHeader>
        <strong>{title}</strong>
      </CCardHeader>
      <CCardBody className="overflow-hidden !p-0">
        <Image
          className="w-full h-full !static"
          unoptimized
          fill
          alt="road map "
          src={src}
        />
      </CCardBody>
    </CCard>
  );
};

export default Card2;
