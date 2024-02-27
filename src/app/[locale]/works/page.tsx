import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getAuthLanguageText, getIndexLanguageText, getWorksPageLanguageText} from "~/configs/languageText";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const worksText = await getWorksPageLanguageText();
  const authLanguageText = await getAuthLanguageText();

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      worksText={worksText}
      authLanguageText={authLanguageText}
    >

    </PageComponent>
  )
}
