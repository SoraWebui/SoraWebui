import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';
import {allVideoList, randomVideo} from "~/data/openaiVideo";

export default async function IndexPage({params: {locale = ''}}) {
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
    soraResultTitle: tIndex('soraResultTitle'),
    soraWorksTitle: tIndex('soraWorksTitle'),
  };

  const initVideoList = randomVideo(5);


  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      initVideoList={initVideoList}
    >

    </PageComponent>
  )
}
