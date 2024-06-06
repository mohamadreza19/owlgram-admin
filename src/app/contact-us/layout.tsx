'use clinet';

import ContactUsModule from './contactUs.module';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <ContactUsModule>{children}</ContactUsModule>;
}
