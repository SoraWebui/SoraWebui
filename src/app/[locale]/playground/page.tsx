import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getIndexLanguageText, getPlaygroundPageLanguageText} from "~/configs/languageText";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const playgroundText = await getPlaygroundPageLanguageText();


  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      playgroundText={playgroundText}
    >

    </PageComponent>
  )
}
