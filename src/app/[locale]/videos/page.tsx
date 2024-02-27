import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {getAuthLanguageText, getIndexLanguageText, getVideosPageLanguageText} from "~/configs/languageText";

export default async function Videos({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const videosLanguageText = getVideosPageLanguageText();
  const authLanguageText = await getAuthLanguageText();

  return (
    <PageComponent
      locale={locale}
      videosLanguageText={videosLanguageText}
      indexLanguageText={indexLanguageText}
      authLanguageText={authLanguageText}
    />
  )
}
