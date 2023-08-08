import { createI18n } from 'vue-i18n';
import zh_TW from '@/composables/useI18n/locales/zh-tw/index';
import en from '@/composables/useI18n/locales/en/index';

export const i18n = createI18n({
  // globalInjection: true,
  // legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-TW': zh_TW,
    en,
  },
});
export const useI18n = i18n.global.t;

export function setLang(locale: 'zh-TW' | 'en') {
  i18n.global.locale = locale;
}
