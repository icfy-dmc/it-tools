import messages from '@intlify/unplugin-vue-i18n/messages';
import { get } from '@vueuse/core';
import type { Plugin } from 'vue';
import { createI18n } from 'vue-i18n';

const i18nData = createI18n({
  legacy: false,
  locale: 'zh',
  messages,
});

export const i18nPlugin: Plugin = {
  install: (app) => {
    app.use(i18nData);
  },
};

export const i18n = i18nData;

export const translate = function (localeKey: string) {
  const hasKey = i18n.global.te(localeKey, get(i18n.global.locale));
  return hasKey ? i18n.global.t(localeKey) : localeKey;
};
