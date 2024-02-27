import {unstable_setRequestLocale} from 'next-intl/server';

import PageComponent from './PageComponent';
import {getAuthLanguageText, getIndexLanguageText, getTermsOfServiceLanguageText} from "~/configs/languageText";

export default async function PageContent({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const termsOfServiceLanguageText = await getTermsOfServiceLanguageText();
  const authLanguageText = await getAuthLanguageText();

  return (
    <PageComponent
      locale={locale}
      termsOfServiceLanguageText={termsOfServiceLanguageText}
      indexLanguageText={indexLanguageText}
      authLanguageText={authLanguageText}
    >
    </PageComponent>
  )

}
