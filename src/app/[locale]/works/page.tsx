import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

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
    moreExample: tIndex('moreExample'),
  };

  const tWorks = await getTranslations('worksPage');
  const worksText = {
    title: tWorks('title'),
    description: tWorks('description'),
    h1Text: tWorks('h1Text'),
    pDescription: tWorks('pDescription'),
    generateNew: tWorks('generateNew'),
  }

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      worksText={worksText}
    >

    </PageComponent>
  )
}
