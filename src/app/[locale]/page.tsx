import PageComponent from "./PageComponent";
import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

export default async function IndexPage({params: {locale=''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('IndexPage');


  return (
    <PageComponent
      locale={locale}
      title={t('title')}
      description={t('description')}
    >

    </PageComponent>
  )
}
