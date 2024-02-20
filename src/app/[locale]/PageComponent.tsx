'use client'
import {useRouter} from "next/navigation";
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import {useState} from "react";
import {allVideoList, randomVideo} from "~/data/openaiVideo";
import HeadInfo from "~/components/HeadInfo";

const PageComponent = ({
                         locale = '',
                         currentLanguageText= {
                           title: '',
                           description: '',
                           loadingText: '',
                           buttonText: '',
                           placeholderText: '',
                           loginText: '',
                           h1Text: '',
                           pDescription: '',
                           soraVideoExample: '',
                           prompt: '',
                         },
                         initVideoList = []
                       }) => {
  const router = useRouter();

  const [textStr, setTextStr] = useState('');


  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!textStr) {
      setVideoList(randomVideo());
      return;
    }

    // 文本框有字符
    const resultVideoList = [];
    // 单词数组
    const words = textStr.split(" ");
    for (let i = 0; i < allVideoList.length; i++) {
      const currentVideo = allVideoList[i];
      const currentPrompt = currentVideo.prompt.split(" ");
      for (let j = 0; j < currentPrompt.length; j++) {
        let check = false;
        for (let k = 0; k < words.length; k++) {
          if (currentPrompt[j] == words[k]) {
            resultVideoList.push(currentVideo);
            check = true;
            break;
          }
        }
        if (check) {
          break;
        }
      }
    }
    if (resultVideoList.length <= 0) {
      setVideoList(randomVideo());
    } else {
      setVideoList(resultVideoList);
    }
  }

  const [videoList, setVideoList] = useState(initVideoList);

  return (
    <>
      <HeadInfo
        title={currentLanguageText.title}
        description={currentLanguageText.description}
        locale={locale}
        page={""}
      />
      <Header locale={locale}/>
      <div>
        <div className="block overflow-hidden bg-[#020d24] bg-cover bg-center text-white"
             style={{backgroundImage: 'https://assets.website-files.com/6502af467b2a8c4ee8159a5b/6502af467b2a8c4ee8159a77_Group%2047929.svg'}}>
          <div className="mx-auto w-full max-w-7xl px-5 mb-5">
            <div
              className="mx-auto flex max-w-4xl flex-col items-center text-center py-10">
              <h1 className="mb-4 text-4xl font-bold md:text-6xl">{currentLanguageText.h1Text}title2</h1>
              <div className="mb-5 max-w-[528px] lg:mb-8">
                <p className="text-[#7c8aaa] text-xl">{currentLanguageText.pDescription}</p>
              </div>
            </div>
            <div>
              <div
                className={"w-[90%] mx-auto rounded-tl-[30px] rounded-tr-[30px] border-[12px] border-[#ffffff1f] object-fill"}>
                <form onSubmit={handleSubmit} className="relative shadow-lg">
                  <div
                    className="overflow-hidden focus-within:ring-1 focus-within:ring-indigo-500 rounded-tl-[20px] rounded-tr-[20px]">
                    <textarea
                      rows={8}
                      name="description"
                      id="description"
                      className="block w-full resize-none border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-lg pt-4 pl-4"
                      placeholder={currentLanguageText.placeholderText}
                      value={textStr}
                      onChange={(e) => {
                        setTextStr(e.target.value);
                      }}
                      maxLength={100}
                    />
                  </div>
                  <div className="inset-x-px bottom-1 bg-white">
                    <div
                      className="flex justify-center items-center space-x-3 border-t border-gray-200 px-2 py-2">
                      <div className="pt-2 w-1/4">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center items-center rounded-md bg-[#2d6ae0] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800"
                        >
                          {currentLanguageText.buttonText}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className={"border-[14px] border-[#ffffff1f] object-fill w-[90%] mx-auto mt-8"}>
              <div className={"mx-auto bg-white"}>
                <div className={"pb-2 border-b-2"}>
                  <h2
                    className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{currentLanguageText.soraVideoExample}</h2>
                </div>
                <ul role={"list"} className={"divide-y divide-gray-300"}>
                  {
                    videoList?.map((item, index) => (
                      <li key={item.prompt + item.keywords} className={"px-6 py-4"}>
                        <div className={"flex-col"}>
                          <div className={"flex justify-center items-center"}>
                            <video
                              id={"videoId" + item.prompt}
                              controls={true}
                              autoPlay={false}
                              controlsList={"nodownload"}
                              src={item.videoUrl}
                            ></video>
                          </div>
                          <div className={"text-gray-500"}>
                            {currentLanguageText.prompt}: {item.prompt}
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer
        locale={locale}
        description={currentLanguageText.description}
      />
    </>
  )


}
export default PageComponent
