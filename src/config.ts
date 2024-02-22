import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'zh', 'ko', 'ja'] as const;

export const languages = [
  {
    code: "en-US",
    lang: "en",
    language: "English",
  },
  {
    code: "zh-CN",
    lang: "zh",
    language: "简体中文",
  },
  {
    code: "ko-KR",
    lang: "ko",
    language: "한국어",
  },
  {
    code: "ja-JP",
    lang: "ja",
    language: "日本語",
  }
]

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`，设置为 as-needed可不显示默认路由
export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;

export const getLanguageByLang = (lang) => {
  for (let i = 0; i < languages.length; i++) {
    if (lang == languages[i].lang) {
      return  languages[i];
    }
  }
}
