import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {allVideoList, randomVideo} from "~/data/openaiVideo";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('IndexPage');
  const currentLanguageText = {
    title: t('title'),
    description: t('description'),
    loadingText: t('loadingText'),
    generateText: t('generateText'),
    buttonText: t('buttonText'),
    placeholderText: t('placeholderText'),
    loginText: t('loginText'),
    h1Text: t('h1Text'),
    pDescription: t('pDescription'),
    soraVideoExample: t('soraVideoExample'),
    prompt: t('prompt'),
  };

  const initVideoList = randomVideo();


  return (
    <PageComponent
      locale={locale}
      currentLanguageText={currentLanguageText}
      initVideoList={initVideoList}
    >

    </PageComponent>
  )
}
