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
    h1Text: tIndex('h1Text'),
    pDescription: tIndex('pDescription'),
    soraVideoExample: tIndex('soraVideoExample'),
    prompt: tIndex('prompt'),
    moreExample: tIndex('moreExample'),
  };

  const tIndexQuestion = await getTranslations('indexQuestion');
  const questionText = {
    h2_1: tIndexQuestion('h2_1'),
    h2_1_p1: tIndexQuestion('h2_1_p1'),
    h2_1_p2: tIndexQuestion('h2_1_p2'),
    h2_1_p3: tIndexQuestion('h2_1_p3'),
    h2_1_p4: tIndexQuestion('h2_1_p4'),
    h2_2: tIndexQuestion('h2_2'),
    h2_2_p1: tIndexQuestion('h2_2_p1'),
    h2_2_p2: tIndexQuestion('h2_2_p2'),
    h2_2_p3: tIndexQuestion('h2_2_p3'),
    h2_2_p4a: tIndexQuestion('h2_2_p4a'),
    h2_2_p4b: tIndexQuestion('h2_2_p4b'),
  }

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
