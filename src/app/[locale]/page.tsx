import PageComponent from "./PageComponent";
import {unstable_setRequestLocale} from 'next-intl/server';
import {randomVideo} from "~/data/openaiVideo";
import {getIndexLanguageText, getQuestionLanguageText} from "~/configs/languageText";

export default async function IndexPage({params: {locale = ''}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);
  const indexLanguageText = await getIndexLanguageText();
  const questionText = await getQuestionLanguageText();

  const initVideoList = randomVideo(2);

  return (
    <PageComponent
      locale={locale}
      indexLanguageText={indexLanguageText}
      initVideoList={initVideoList}
      questionText={questionText}
    >

    </PageComponent>
  )
}
