import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

import PageComponent from './PageComponent';

export default async function PageContent({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('privacyPolicy');
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

  return (
    <PageComponent
      locale={locale}
      data={t}
      indexLanguageText={indexLanguageText}
    >
    </PageComponent>
  )
}
