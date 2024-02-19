import {getTranslations, unstable_setRequestLocale} from 'next-intl/server';

import PageComponent from './PageComponent';

export default async function PageContent({params: {locale=''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = await getTranslations('privacyPolicy');
  const tIndex = await getTranslations('IndexPage');

  return (
    <PageComponent
      locale={locale}
      data={t}
      dataIndex={tIndex}
    >
    </PageComponent>
  )
}
