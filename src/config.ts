import {Pathnames} from 'next-intl/navigation';

export const locales = ['en', 'zh'] as const;

export const languages = [
  {
    lang: "en",
    language: "English",
  },
  {
    lang: "zh",
    language: "简体中文",
  }
]

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

// Use the default: `always`，设置为 as-needed可不显示默认路由
export const localePrefix = 'as-needed';

export type AppPathnames = keyof typeof pathnames;

