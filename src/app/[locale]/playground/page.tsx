import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getAuthLanguageText, getIndexLanguageText, getPlaygroundPageLanguageText} from "~/configs/languageText";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const playgroundText = await getPlaygroundPageLanguageText();
  const authLanguageText = await getAuthLanguageText();

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      playgroundText={playgroundText}
      authLanguageText={authLanguageText}
    >

    </PageComponent>
  )
}
