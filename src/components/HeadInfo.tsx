import { languages } from "~/config";

const HeadInfo = ({
                    title = "",
                    description = "",
                    page = "",
                    locale = "en"
                  }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description}/>
      {
        languages.map((item) => {
          const currentPage = page;
          let hrefLang = item.code;
          if (item.lang == 'en') {
            hrefLang = 'x-default';
          }
          let href = `${process.env.NEXT_PUBLIC_SITE_URL}/${item.lang}${currentPage}`;
          if (item.lang == 'en') {
            href = `${process.env.NEXT_PUBLIC_SITE_URL}${currentPage}`;
          }
          return <link key={href} rel="alternate" hrefLang={hrefLang} href={href}/>
        })
      }
      {
        languages.map((item) => {
          const currentPage = page;
          let hrefLang = item.code;
          let href = `${process.env.NEXT_PUBLIC_SITE_URL}/${item.lang}${currentPage}`;
          if (item.lang == 'en') {
            href = `${process.env.NEXT_PUBLIC_SITE_URL}${currentPage}`;
          }
          if (locale == item.lang) {
            return <link key={href + 'canonical'} rel="canonical" hrefLang={hrefLang} href={href}/>
          }
        })
      }
    </>
  )
}

export default HeadInfo
