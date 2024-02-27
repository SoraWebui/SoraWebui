import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getIndexLanguageText, getWorksPageLanguageText} from "~/configs/languageText";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const worksText = await getWorksPageLanguageText();

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      worksText={worksText}
    >

    </PageComponent>
  )
}
