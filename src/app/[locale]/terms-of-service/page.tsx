import {unstable_setRequestLocale} from 'next-intl/server';

import PageComponent from './PageComponent';
import {getIndexLanguageText, getTermsOfServiceLanguageText} from "~/configs/languageText";

export default async function PageContent({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const termsOfServiceLanguageText = await getTermsOfServiceLanguageText();

  return (
    <PageComponent
      locale={locale}
      termsOfServiceLanguageText={termsOfServiceLanguageText}
      indexLanguageText={indexLanguageText}
    >
    </PageComponent>
  )

}
