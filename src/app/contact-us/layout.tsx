'use clinet';

import LanguagesModule from '../languages/languages.module';
import ContactUsModule from './contactUs.module';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ContactUsModule>
      <LanguagesModule>{children}</LanguagesModule>
    </ContactUsModule>
  );
}
