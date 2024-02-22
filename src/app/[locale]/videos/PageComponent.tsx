'use client'
import HeadInfo from "~/components/HeadInfo";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import {allVideoList} from "~/data/openaiVideo";

const PageComponent = ({
                         locale = '',
                         videosLanguageText,
                         indexLanguageText,
                         initVideoList = []
                       }) => {

  const handleMouseEnter = (event) => {
    event.target.play();
  };

  const handleMouseLeave = (event) => {
    event.target.pause();
  };

  return (
    <>
      <HeadInfo
        title={videosLanguageText.title}
        description={videosLanguageText.description}
        locale={locale}
        page={"/videos"}
      />
      <Header locale={locale} page={"videos"} indexLanguageText={indexLanguageText}/>

      <div className={"mb-8"}>
        <h2
          className={"text-blue-500 pt-4 text-4xl flex justify-center items-center"}>{indexLanguageText.soraVideoExample}</h2>
      </div>

      <div className={"w-[90%] mx-auto mb-20"}>
        <div role="list"
             className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allVideoList.map((file) => (
            <div key={file.prompt}>
              <div
                className="rounded-xl flex justify-center items-start">
                <video
                  src={file.videoUrl}
                  controls={true}
                  autoPlay={false}
                  playsInline={true}
                  preload={"metadata"}
                  controlsList={"nodownload"}
                  style={{width: '90%', height: '240px'}}
                  onMouseOver={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <div className={"flex justify-center items-center"}>
                <p
                  className="pointer-events-none mt-2 block text-sm font-medium text-white w-[90%]">{indexLanguageText.prompt}: {file.prompt}</p>
              </div>
            </div>
          ))}
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
