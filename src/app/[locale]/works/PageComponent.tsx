'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import {useState} from "react";
import HeadInfo from "~/components/HeadInfo";
import {useInterval} from "ahooks";
import Link from "next/link";

const PageComponent = ({
                         locale = '',
                         indexLanguageText,
                         worksText
                       }) => {
  const router = useRouter();

  const [videoHistoryList, setVideoHistoryList] = useState([]);
  const [intervalLocalStorage, setIntervalLocalStorage] = useState(500);

  useInterval(() => {
    const videoHistoryListStr = localStorage.getItem('videoHistoryList');
    if (videoHistoryListStr) {
      const videoHistoryList = JSON.parse(videoHistoryListStr);
      setVideoHistoryList(videoHistoryList)
    } else {
      setVideoHistoryList([])
    }
  }, intervalLocalStorage);

  return (
    <>
      <HeadInfo
        title={worksText.title}
        description={worksText.description}
        locale={locale}
        page={"/works"}
      />
      <Header locale={locale} page={"works"} indexLanguageText={indexLanguageText}/>
      <div className={"my-auto"}>
        <div className="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
             style={{backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg'}}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center py-10">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{worksText.h1Text}</h1>
              <div className="mb-5 max-w-[528px] lg:mb-8">
                <p className="text-[#7c8aaa] text-xl">{worksText.pDescription}</p>
              </div>
            </div>
            <div key={"more"} className={"px-6 py-4"}>
              <Link href={`/${locale}/playground`}
                    className={"flex justify-center items-center text-xl text-red-400 hover:text-blue-600"}>
                {worksText.generateNew} {'>>'}
              </Link>
            </div>
            {
              videoHistoryList.length > 0 ?
                <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto"}>
                  <div className={"mx-auto bg-white"}>
                    <ul role={"list"} className={"divide-y divide-gray-300"}>
                      {
                        videoHistoryList?.map((item, index) => (
                          <li key={item.revised_prompt + 'index' + item.url} className={"px-6 py-4"}>
                            <div className={"flex-col"}>
                              <div className={"flex justify-center items-center"}>
                                <video
                                  id={"videoId" + item.revised_prompt}
                                  controls={true}
                                  autoPlay={index == 0}
                                  src={item.url}
                                  preload={"metadata"}
                                ></video>
                              </div>
                              <div className={"text-gray-500"}>
                                {indexLanguageText.prompt}: {item.revised_prompt}
                              </div>
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                :
                null
            }

          </div>
        </div>
      </div>
      <Footer
        locale={locale}
        description={indexLanguageText.description}
      />
    </>
  )


}
export default PageComponent
