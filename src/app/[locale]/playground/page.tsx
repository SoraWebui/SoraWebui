import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const tAuth = await getTranslations('auth');
  const authLanguageText = {
    loginText: tAuth('loginText'),
    loginModalDesc: tAuth('loginModalDesc'),
    loginModalButtonText: tAuth('loginModalButtonText'),
    logoutModalDesc: tAuth('logoutModalDesc'),
    confirmButtonText: tAuth('confirmButtonText'),
    cancelButtonText: tAuth('cancelButtonText'),
  }

  const tIndex = await getTranslations('IndexPage');
  const indexLanguageText = {
    title: tIndex('title'),
    description: tIndex('description'),
    loadingText: tIndex('loadingText'),
    generateText: tIndex('generateText'),
    buttonText: tIndex('buttonText'),
    placeholderText: tIndex('placeholderText'),
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    soraVideoExample: tIndex('soraVideoExample'),
    prompt: tIndex('prompt'),
    moreExample: tIndex('moreExample'),
    soraResultTitle: tIndex('soraResultTitle'),
    soraWorksTitle: tIndex('soraWorksTitle'),
  };

  const tPlaygroundPage = await getTranslations('playgroundPage');
  const playgroundText = {
    title: tPlaygroundPage('title'),
    description: tPlaygroundPage('description'),
    h1Text: tPlaygroundPage('h1Text'),
    pDescription: tPlaygroundPage('pDescription'),
    moreWorks: tPlaygroundPage('moreWorks'),
  }


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
