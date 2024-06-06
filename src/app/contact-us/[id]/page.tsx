'use client';
import { useParams } from 'next/navigation';
import { FunctionComponent, ReactElement, useEffect } from 'react';
import { useContactUsInjection } from '../contactUs.module';

interface GetContactByIdProps {}

const ContactById: FunctionComponent = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const module = useContactUsInjection();
  const contactUs = module.contactUsService.getContactUs(true);
  console.log(contactUs);
  useEffect(() => {
    module.contactUsController.getContactBasedLanguageId(id);
  }, []);
  return <div>sad</div>;
};

export default ContactById;
