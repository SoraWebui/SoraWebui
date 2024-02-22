import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {allVideoList} from "~/data/openaiVideo";

export default async function Videos({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const tIndex = await getTranslations('IndexPage');
  const indexLanguageText = {
    title: tIndex('title'),
    description: tIndex('description'),
    loadingText: tIndex('loadingText'),
    generateText: tIndex('generateText'),
    buttonText: tIndex('buttonText'),
    placeholderText: tIndex('placeholderText'),
    loginText: tIndex('loginText'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    soraVideoExample: tIndex('soraVideoExample'),
    prompt: tIndex('prompt'),
    moreExample: tIndex('moreExample'),
  };

  const tVideosPage = await getTranslations('videosPage');
  const videosLanguageText = {
    title: tVideosPage('title'),
    description: tVideosPage('description'),
  }

  const initVideoList = allVideoList;

  return (
    <PageComponent
      locale={locale}
      videosLanguageText={videosLanguageText}
      initVideoList={initVideoList}
      indexLanguageText={indexLanguageText}
    />
  )
}
